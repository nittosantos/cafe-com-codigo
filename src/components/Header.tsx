type HeaderProps = {
  current: number;
  total: number;
};

export function Header({ current, total }: HeaderProps) {
  return (
    <header>
      <div className="brand">
        <i>☕</i>
        {" <Café com Código />"}
      </div>
      <div className="meta">UMA HISTÓRIA DE REFATORAÇÃO</div>
      <div className="topcount" key={current}>
        {String(current + 1).padStart(2, "0")} / {total}
      </div>
    </header>
  );
}
