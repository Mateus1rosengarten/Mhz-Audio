import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and flags it visible once it enters the viewport.
 * Used for the subtle scroll-in animations across the page.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
