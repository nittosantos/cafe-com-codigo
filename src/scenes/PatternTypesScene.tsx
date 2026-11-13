import { Scene } from "../components/Scene.tsx";

const families = [
  {
    icon: "✻",
    title: "Criação",
    detail: "Como o pedido nasce, sem o caixa conhecer cada montagem.",
  },
  {
    icon: "▤",
    title: "Estrutura",
    detail: "Como as partes se encaixam. O leite de aveia entra no cappuccino.",
  },
  {
    icon: "↗",
    title: "Comportamento",
    detail: "Como uma tarefa troca de forma. O aviso muda de canal.",
  },
];

export function PatternTypesScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">04 · os tipos</div>
        <h2>
          Três famílias.
          <br />
          <em>Três perguntas.</em>
        </h2>
        <p>
          Cada família organiza um tipo de problema. Hoje vamos fundo em uma
          delas.
        </p>
        <div className="note">
          Comportamento: o Strategy, que acabamos de ver. Ele troca o aviso sem
          mexer no pedido.
        </div>
      </div>
      <div className="stage">
        <div className="roles">
          {families.map((family) => (
            <div className="role" key={family.title}>
              <span>{family.icon}</span>
              <b>{family.title}</b>
              <small>{family.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
