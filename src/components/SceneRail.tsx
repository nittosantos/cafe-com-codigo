type SceneRailProps = {
  current: number;
  total: number;
  onGo: (index: number) => void;
};

export function SceneRail({ current, total, onGo }: SceneRailProps) {
  return (
    <aside className="rail" aria-label="Navegar pelas cenas">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={index === current ? "on" : ""}
          aria-label={`Ir para cena ${index + 1}`}
          onClick={() => onGo(index)}
        />
      ))}
    </aside>
  );
}
