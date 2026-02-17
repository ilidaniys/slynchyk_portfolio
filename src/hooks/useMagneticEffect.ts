"use client";
import { useRef, useState, useCallback, useEffect } from "react";

interface MagneticState {
  x: number;
  y: number;
  isHovered: boolean;
}

const STRENGTH = 0.3;

export function useMagneticEffect(): {
  magnetRef: React.RefObject<HTMLDivElement>;
  magnetStyle: React.CSSProperties;
} {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<MagneticState>({ x: 0, y: 0, isHovered: false });
  const rafHandle = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafHandle.current !== null) cancelAnimationFrame(rafHandle.current);
    rafHandle.current = requestAnimationFrame(() => {
      const el = magnetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const deltaX = e.clientX - (rect.left + rect.width / 2);
      const deltaY = e.clientY - (rect.top + rect.height / 2);
      setState({ x: deltaX * STRENGTH, y: deltaY * STRENGTH, isHovered: true });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafHandle.current !== null) {
      cancelAnimationFrame(rafHandle.current);
      rafHandle.current = null;
    }
    setState({ x: 0, y: 0, isHovered: false });
  }, []);

  useEffect(() => {
    const el = magnetRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (rafHandle.current !== null) cancelAnimationFrame(rafHandle.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const magnetStyle: React.CSSProperties = {
    transform: `translate(${state.x}px, ${state.y}px)`,
    transition: state.isHovered
      ? "transform 0.05s linear"
      : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return { magnetRef, magnetStyle };
}
