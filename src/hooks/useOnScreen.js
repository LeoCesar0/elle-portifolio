import { useEffect, useState } from "react";

function useOnScreen(ref, rootMargin = "0px", once = true) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && triggered) return;
        if (entry.isIntersecting) {
          setTriggered(true);
        }
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin, triggered]);

  return isIntersecting;
}

export default useOnScreen;
