import { PatternFlow } from "../components/PatternFlow.tsx";
import { Scene } from "../components/Scene.tsx";

export function StrategyScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">03 · strategy</div>
        <h2>
          A mesma tarefa.
          <br />
          <em>Outra forma.</em>
        </h2>
        <p>
          <strong>Strategy</strong> é um padrão de comportamento. Ele separa o
          que precisa acontecer de como isso acontece.
        </p>
        <p>
          No café, o pedido precisa avisar o cliente. O aviso pode ser no
          balcão, por mensagem ou por outro canal.
        </p>
        <div className="note">
          O pedido pede um aviso. Quem escolhe o canal fica de fora.
        </div>
      </div>
      <div className="stage">
        <PatternFlow
          arrow
          steps={[
            {
              kicker: "O QUE É",
              title: "Uma tarefa, várias formas.",
              text: "A tarefa tem um nome só. A forma de cumprir pode ser trocada.",
            },
            {
              kicker: "COMO FUNCIONA",
              title: "O pedido recebe a forma.",
              text: "Ele chama “avise”. Não sabe se o aviso sai no balcão ou na mensagem.",
            },
            {
              kicker: "O QUE RESOLVE",
              title: "Trocar sem reescrever.",
              text: "O canal muda. A regra do pedido continua a mesma.",
            },
          ]}
        />
      </div>
    </Scene>
  );
}
