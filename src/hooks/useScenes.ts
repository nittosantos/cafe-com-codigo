import { useCallback, useEffect, useRef, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function useScenes(total: number) {
  const root = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const go = useCallback(
    (n: number) => {
      const scenes = root.current?.querySelectorAll<HTMLElement>(".scene");
      if (!scenes?.length) return;
      const index = Math.max(0, Math.min(n, total - 1));
      const scene = scenes[index];
      if (!scene) return;
      const top = scene.getBoundingClientRect().top + window.scrollY;
      const reduce = window.matchMedia(REDUCED_MOTION).matches;
      window.scrollTo({
        top,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [total],
  );

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const scenes = [...container.querySelectorAll<HTMLElement>(".scene")];
    scenes.forEach((scene, index) => {
      scene.id = `cena-${index + 1}`;
    });
    let last = -1;

    function update() {
      const marker = window.innerHeight * 0.35;
      let index = scenes.findIndex((scene) => {
        const rect = scene.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      if (index < 0) {
        let nearest = Infinity;
        scenes.forEach((scene, i) => {
          const distance = Math.abs(scene.getBoundingClientRect().top);
          if (distance < nearest) {
            nearest = distance;
            index = i;
          }
        });
      }
      if (index < 0) return;
      scenes[index]?.classList.add("active");
      if (index === last) return;
      last = index;
      setCurrent(index);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [total]);

  useEffect(() => {
    function sceneOnScreen() {
      const scenes = [
        ...(root.current?.querySelectorAll<HTMLElement>(".scene") ?? []),
      ];
      const marker = window.innerHeight * 0.4;
      const visible = scenes.findIndex((scene) => {
        const rect = scene.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      return visible >= 0 ? visible : current;
    }

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
      const index = sceneOnScreen();
      if (forward.includes(event.key)) go(index + 1);
      if (back.includes(event.key)) go(index - 1);
      if (event.key === "Home") go(0);
      if (event.key === "End") go(total - 1);
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [current, go, total]);

  return { root, current, go };
}
