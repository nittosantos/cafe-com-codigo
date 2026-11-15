import { CupStage } from "../components/CupStage.tsx";
import { Scene } from "../components/Scene.tsx";
import { baixarExemplo } from "../lib/baixarExemplo.ts";

type ClosingSceneProps = {
  onRestart: () => void;
};

export function ClosingScene({ onRestart }: ClosingSceneProps) {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">15 · leve isso com você</div>
        <h2>
          O aviso pode mudar.
          <br />
          <em>O pedido, não.</em>
        </h2>
        <p>
          Hoje usamos um padrão de comportamento: <strong>Strategy</strong>.
          Quando o canal mudar, troque a estratégia.
        </p>
        <div className="note">
          Separar o cálculo e abrir o cardápio prepararam o terreno.
          Responsabilidade única, aberto/fechado e inversão de dependência
          apareceram no caminho. São princípios.
        </div>
        <button className="primary" onClick={baixarExemplo}>
          Baixar o exemplo completo <span>↓</span>
        </button>
        <button
          style={{
            display: "block",
            background: "none",
            border: "0",
            color: "var(--muted)",
            padding: "20px 0",
            fontSize: "15px",
          }}
          onClick={onRestart}
        >
          ↺ Voltar ao início
        </button>
      </div>
      <div className="stage">
        <CupStage
          symbol="✓"
          tickets={[
            {
              kicker: "PADRÃO",
              title: "Strategy.",
              detail: "o aviso troca de canal",
            },
            {
              kicker: "COMPORTAMENTO",
              title: "Preservado.",
              detail: "R$ 32 antes e depois",
            },
            {
              kicker: "PRÓXIMO PEDIDO",
              title: "Pode chegar.",
              detail: "o código está preparado",
            },
          ]}
        />
      </div>
    </Scene>
  );
}
