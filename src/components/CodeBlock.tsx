import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

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

function copyCode(node: ReactNode) {
  return Children.map(node, (child) =>
    isValidElement(child) ? cloneElement(child) : child,
  );
}

function CodeModal({
  title,
  footerLabel,
  footerValue,
  children,
  onClose,
}: {
  title: ReactNode;
  footerLabel?: ReactNode;
  footerValue?: ReactNode;
  children: ReactNode;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = useRef(onClose);
  close.current = onClose;

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (!node.open) node.showModal();
    document.body.dataset.codeOpen = "1";
    function onCancel(event: Event) {
      event.preventDefault();
      close.current();
    }
    node.addEventListener("cancel", onCancel);
    return () => {
      delete document.body.dataset.codeOpen;
      node.removeEventListener("cancel", onCancel);
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className="code-modal"
      aria-label="Código ampliado"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close.current();
      }}
    >
      <div className="editorhead">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
        <button type="button" className="code-close" onClick={onClose}>
          fechar
        </button>
      </div>
      <pre>{children}</pre>
      {footerLabel != null ? (
        <div className="footcode">
          <span>{footerLabel}</span>
          <b>{footerValue}</b>
        </div>
      ) : null}
    </dialog>,
    document.body,
  );
}

export function CodeBlock({
  title,
  dots = true,
  preStyle,
  footerLabel,
  footerValue,
  children,
}: CodeBlockProps) {
  const [open, setOpen] = useState(false);
  const label = typeof title === "string" ? title : "código";

  return (
    <>
      <div
        className="editor"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Ampliar ${label}`}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="editorhead">
          {dots ? (
            <span className="dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          ) : null}
          <span>{title}</span>
          <span className="ampliar">ampliar</span>
        </div>
        <pre style={preStyle}>{children}</pre>
        {footerLabel != null ? (
          <div className="footcode">
            <span>{footerLabel}</span>
            <b>{footerValue}</b>
          </div>
        ) : null}
      </div>
      {open ? (
        <CodeModal
          title={title}
          footerLabel={footerLabel}
          footerValue={footerValue}
          onClose={() => setOpen(false)}
        >
          {copyCode(children)}
        </CodeModal>
      ) : null}
    </>
  );
}
