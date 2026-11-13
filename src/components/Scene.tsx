import type { ReactNode } from "react";

type SceneProps = {
  active?: boolean;
  className?: string;
  children: ReactNode;
};

export function Scene({ active = false, className, children }: SceneProps) {
  const names = ["scene", active ? "active" : "", className]
    .filter(Boolean)
    .join(" ");
  return <section className={names}>{children}</section>;
}
