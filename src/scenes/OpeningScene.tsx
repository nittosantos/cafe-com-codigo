import { CupStage } from "../components/CupStage.tsx";
import { Scene } from "../components/Scene.tsx";

type OpeningSceneProps = {
  onStart: () => void;
};

export function OpeningScene({ onStart }: OpeningSceneProps) {
  return (
    <Scene active>
      <div className="reveal">
        <div className="eyebrow">01 · antes do código</div>
        <h1>
          Um café.
          <br />
          Muitos pedidos.
          <br />
          <em>Um pequeno caos.</em>
        </h1>
        <p>
          Uma história sobre uma cafeteria que cresceu — e um código que
          precisa crescer junto.
        </p>
        <button className="primary" onClick={onStart}>
          Começar a história <span>↓</span>
        </button>
        <div style={{ display: "block" }}>
          <span className="tag">
            TypeScript real <span>·</span> 7 min <span>·</span> no seu ritmo
          </span>
        </div>
      </div>
      <div className="stage">
        <CupStage
          symbol="✳"
          caption="PEQUENAS MUDANÇAS. CÓDIGO MELHOR."
          tickets={[
            {
              kicker: "PEDIDO #001",
              title: "1 espresso",
              detail: "preparar · cobrar · avisar",
            },
            {
              kicker: "PEDIDO #002",
              title: "2 cappuccinos",
              detail: "com leite de aveia, por favor",
            },
            {
              kicker: "O MOVIMENTO AUMENTOU ↗",
              title: "E agora?",
            },
          ]}
        />
      </div>
    </Scene>
  );
}
