"use client";

import React from "react";
import { useScrollReveal } from "~/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, delay = 0, className }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fadeInUp" : "opacity-0"} ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
