import { PatternFlow } from "../components/PatternFlow.tsx";
import { Scene } from "../components/Scene.tsx";

export function WhatIsPatternScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">02 · o que é</div>
        <h2>
          Um nome para
          <br />
          <em>uma boa solução.</em>
        </h2>
        <p>
          <strong>Design Patterns, ou padrões de projeto,</strong> descrevem
          soluções reutilizáveis para problemas recorrentes de organização do
          software.
        </p>
        <p>
          Eles existem para a equipe não reinventar a mesma organização e para
          falar da solução <strong>pelo nome</strong>.
        </p>
        <div className="note">
          São ideias para adaptar ao contexto, não código pronto para copiar.
        </div>
      </div>
      <div className="stage">
        <PatternFlow
          arrow
          steps={[
            {
              kicker: "O PROBLEMA SE REPETE",
              title: "Várias cafeterias.",
              text: "A mesma dificuldade aparece em projetos diferentes.",
            },
            {
              kicker: "A IDEIA GANHA UM NOME",
              title: "Dá para reconhecer.",
              text: "Com o nome, a equipe conversa, compara e adapta.",
            },
          ]}
        />
      </div>
    </Scene>
  );
}
