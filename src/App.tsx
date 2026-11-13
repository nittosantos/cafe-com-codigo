import { CursorGlow } from "./components/CursorGlow.tsx";
import { Header } from "./components/Header.tsx";
import { ProgressBar } from "./components/ProgressBar.tsx";
import { SceneNav } from "./components/SceneNav.tsx";
import { SceneRail } from "./components/SceneRail.tsx";
import { useScenes } from "./hooks/useScenes.ts";
import {
  BeforeScene,
  ChaosScene,
  ClosingScene,
  CompareScene,
  DependencyInversionScene,
  OpeningScene,
  OpenClosedScene,
  PatternTypesScene,
  SimulationScene,
  SingleResponsibilityScene,
  StrategyScene,
  TOTAL_CENAS,
  WhatIsPatternScene,
} from "./scenes/index.ts";

export default function App() {
  const { root, current, go } = useScenes(TOTAL_CENAS);

  return (
    <div ref={root}>
      <CursorGlow />
      <ProgressBar current={current} total={TOTAL_CENAS} />
      <Header current={current} total={TOTAL_CENAS} />
      <SceneRail current={current} total={TOTAL_CENAS} onGo={go} />
      <main>
        <OpeningScene onStart={() => go(1)} />
        <WhatIsPatternScene />
        <StrategyScene />
        <PatternTypesScene />
        <ChaosScene />
        <BeforeScene />
        <SingleResponsibilityScene />
        <OpenClosedScene />
        <DependencyInversionScene />
        <CompareScene />
        <SimulationScene />
        <ClosingScene onRestart={() => go(0)} />
      </main>
      <SceneNav
        onPrev={() => go(current - 1)}
        onNext={() => go(current + 1)}
      />
    </div>
  );
}
