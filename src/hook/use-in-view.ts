import { useRef, useEffect, useState, useCallback } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options, ref, callback]);

  return [ref, isVisible];
}
