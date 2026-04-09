"use client";
import { useEffect, useRef, useCallback } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      ref.current.classList.add("visible");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", animate);
    animate();
    return () => window.removeEventListener("scroll", animate);
  }, [animate]);

  return ref;
}
