type SceneNavProps = {
  onPrev: () => void;
  onNext: () => void;
};

export function SceneNav({ onPrev, onNext }: SceneNavProps) {
  return (
    <footer className="nav">
      <span className="hint">
        {"ROLE PARA EXPLORAR "}
        <span style={{ color: "var(--lime)" }}>↓</span>
        {"   OU USE AS SETAS"}
      </span>
      <div className="controls">
        <button onClick={onPrev} aria-label="Cena anterior">
          ←
        </button>
        <button onClick={onNext} aria-label="Próxima cena">
          →
        </button>
      </div>
    </footer>
  );
}
