"use client";
import { useRef, useState, useCallback, useEffect } from "react";

export interface HolographicState {
  tiltX: number;
  tiltY: number;
  glareX: number;
  glareY: number;
  shimmerX: number;
  shimmerY: number;
  isHovered: boolean;
}

const INITIAL_STATE: HolographicState = {
  tiltX: 0,
  tiltY: 0,
  glareX: 50,
  glareY: 50,
  shimmerX: 50,
  shimmerY: 50,
  isHovered: false,
};

export function useHolographicEffect(): {
  cardRef: React.RefObject<HTMLDivElement>;
  holographic: HolographicState;
} {
  const cardRef = useRef<HTMLDivElement>(null);
  const [holographic, setHolographic] = useState<HolographicState>(INITIAL_STATE);
  const rafHandle = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafHandle.current !== null) {
      cancelAnimationFrame(rafHandle.current);
    }
    rafHandle.current = requestAnimationFrame(() => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5, 0.5]
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      const glareX = (normX + 0.5) * 100;
      const glareY = (normY + 0.5) * 100;
      setHolographic({
        tiltX: -normY * 12,
        tiltY: normX * 12,
        glareX,
        glareY,
        shimmerX: glareX * 0.8 + 10,
        shimmerY: glareY * 0.8 + 10,
        isHovered: true,
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafHandle.current !== null) {
      cancelAnimationFrame(rafHandle.current);
      rafHandle.current = null;
    }
    setHolographic(INITIAL_STATE);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (rafHandle.current !== null) {
        cancelAnimationFrame(rafHandle.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { cardRef, holographic };
}
