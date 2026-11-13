import { CupStage } from "../components/CupStage.tsx";
import { Scene } from "../components/Scene.tsx";

export function ChaosScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">04 · o problema</div>
        <h2>
          O barista faz
          <br />
          <em>absolutamente tudo.</em>
        </h2>
        <p>
          Ele anota o pedido, calcula o valor, prepara o café e avisa o
          cliente. Funciona… até mudar o preço ou chegar uma bebida nova.
        </p>
        <p>
          <strong>Qualquer mudança interrompe a operação inteira.</strong> No
          código, isso acontece quando uma função acumula responsabilidades.
        </p>
      </div>
      <div className="stage">
        <CupStage
          symbol="!"
          cupColor="var(--orange)"
          tickets={[
            {
              kicker: "CAIXA",
              title: "Calcular preços",
              detail: "o cardápio mudou!",
            },
            {
              kicker: "COZINHA",
              title: "Preparar bebidas",
              detail: "tem latte agora!",
            },
            {
              kicker: "ATENDIMENTO",
              title: "Avisar o cliente",
              detail: "trocar SMS por WhatsApp?",
            },
          ]}
        />
      </div>
    </Scene>
  );
}
