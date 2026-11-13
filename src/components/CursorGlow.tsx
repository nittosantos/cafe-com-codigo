import { useEffect, useRef } from "react";

const FINE_POINTER = "(pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = glow.current;
    if (!node) return;
    if (!window.matchMedia(FINE_POINTER).matches) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    function move(event: PointerEvent) {
      node?.style.setProperty("opacity", "1");
      node?.style.setProperty(
        "transform",
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
      );
    }

    function hide() {
      node?.style.setProperty("opacity", "0");
    }

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);

  return <div ref={glow} className="cursor-glow" aria-hidden="true" />;
}
