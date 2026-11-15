import { Scene } from "../components/Scene.tsx";

const ganhos = [
  {
    icon: "✎",
    title: "Manutenção",
    detail: "O canal muda sem abrir o pedido.",
  },
  {
    icon: "↻",
    title: "Reutilização",
    detail: "O cálculo serve para o cardápio todo.",
  },
  {
    icon: "↗",
    title: "Evolução",
    detail: "O latte entrou sem outro if.",
  },
];

export function AdvantagesScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">13 · vantagens</div>
        <h2>
          O canal muda.
          <br />
          <em>A regra fica.</em>
        </h2>
        <p>
          O aviso troca de lugar e o pedido não é reescrito. A soma continua a
          mesma função. Uma bebida nova entra no cardápio, não num if.
        </p>
        <div className="note">
          A compra original segue em R$ 32. O padrão preserva o que já
          funcionava.
        </div>
      </div>
      <div className="stage">
        <div className="roles">
          {ganhos.map((ganho) => (
            <div className="role" key={ganho.title}>
              <span>{ganho.icon}</span>
              <b>{ganho.title}</b>
              <small>{ganho.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
