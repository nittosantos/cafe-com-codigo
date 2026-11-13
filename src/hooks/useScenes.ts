import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function useScenes(total: number) {
  const root = useRef<HTMLDivElement>(null);
  const last = useRef(-1);
  const [current, setCurrent] = useState(0);

  const list = useCallback(() => {
    return [...(root.current?.querySelectorAll<HTMLElement>(".scene") ?? [])];
  }, []);

  const mostVisible = useCallback(() => {
    const height = window.innerHeight || 1;
    let best = 0;
    let area = -1;
    list().forEach((scene, index) => {
      const rect = scene.getBoundingClientRect();
      const visible = Math.min(rect.bottom, height) - Math.max(rect.top, 0);
      if (visible > area) {
        area = visible;
        best = index;
      }
    });
    return best;
  }, [list]);

  const show = useCallback(
    (index: number) => {
      if (index === last.current) return;
      last.current = index;
      list().forEach((scene, i) => {
        if (i === index) scene.dataset.on = "1";
        else delete scene.dataset.on;
      });
      setCurrent(index);
    },
    [list],
  );

  const go = useCallback(
    (n: number) => {
      const scenes = list();
      if (!scenes.length) return;
      const index = Math.max(0, Math.min(n, total - 1));
      const scene = scenes[index];
      if (!scene) return;
      const reduce = window.matchMedia(REDUCED_MOTION).matches;
      window.scrollTo({
        top: scene.getBoundingClientRect().top + window.scrollY,
        behavior: reduce ? "auto" : "smooth",
      });
      const started = performance.now();
      function watch() {
        show(mostVisible());
        if (mostVisible() === index || performance.now() - started > 2000) return;
        requestAnimationFrame(watch);
      }
      requestAnimationFrame(watch);
    },
    [list, mostVisible, show, total],
  );

  useLayoutEffect(() => {
    list().forEach((scene, index) => {
      scene.id = `cena-${index + 1}`;
    });
    function update() {
      show(mostVisible());
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scrollend", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("scrollend", update);
      window.removeEventListener("resize", update);
    };
  }, [list, mostVisible, show]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag && ["BUTTON", "INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        return;
      }
      const forward = ["ArrowDown", "ArrowRight", "PageDown", " "];
      const back = ["ArrowUp", "ArrowLeft", "PageUp"];
      if (
        !forward.includes(event.key) &&
        !back.includes(event.key) &&
        event.key !== "Home" &&
        event.key !== "End"
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const index = mostVisible();
      if (forward.includes(event.key)) go(index + 1);
      if (back.includes(event.key)) go(index - 1);
      if (event.key === "Home") go(0);
      if (event.key === "End") go(total - 1);
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [go, mostVisible, total]);

  return { root, current, go };
}
