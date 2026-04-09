"use client";

import { useEffect, useRef } from "react";

export function useCounter(target: number, duration = 2000) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent =
        Math.floor(start).toLocaleString() + (target > 99 ? "+" : "");
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return ref;
}
