import { Fragment, type ReactNode } from "react";

export type PatternStep = {
  kicker: string;
  title: string;
  text: string;
};

type PatternFlowProps = {
  steps: PatternStep[];
  arrow?: boolean;
  children?: ReactNode;
};

export function PatternFlow({
  steps,
  arrow = false,
  children,
}: PatternFlowProps) {
  return (
    <div className="pattern-flow">
      {steps.map((step, index) => (
        <Fragment key={step.kicker}>
          {arrow && index > 0 ? <div className="pattern-arrow">↓</div> : null}
          <div className="pattern-step">
            <small>{step.kicker}</small>
            <b>{step.title}</b>
            <p>{step.text}</p>
          </div>
        </Fragment>
      ))}
      {children}
    </div>
  );
}
