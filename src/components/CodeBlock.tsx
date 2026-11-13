import type { CSSProperties, ReactNode } from "react";

type ToneProps = {
  children: ReactNode;
};

export function Kw({ children }: ToneProps) {
  return <span className="kw">{children}</span>;
}

export function Str({ children }: ToneProps) {
  return <span className="str">{children}</span>;
}

export function Comment({ children }: ToneProps) {
  return <span className="comment">{children}</span>;
}

export function Added({ children }: ToneProps) {
  return <span className="added">{children}</span>;
}

export function Deleted({ children }: ToneProps) {
  return <span className="deleted">{children}</span>;
}

type CodeBlockProps = {
  title: ReactNode;
  dots?: boolean;
  preStyle?: CSSProperties;
  footerLabel?: ReactNode;
  footerValue?: ReactNode;
  children: ReactNode;
};

export function CodeBlock({
  title,
  dots = true,
  preStyle,
  footerLabel,
  footerValue,
  children,
}: CodeBlockProps) {
  return (
    <div className="editor">
      <div className="editorhead">
        {dots ? (
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        ) : null}
        <span>{title}</span>
      </div>
      <pre style={preStyle}>{children}</pre>
      {footerLabel != null ? (
        <div className="footcode">
          <span>{footerLabel}</span>
          <b>{footerValue}</b>
        </div>
      ) : null}
    </div>
  );
}
