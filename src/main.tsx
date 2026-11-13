import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/scene.css";
import "./styles/art.css";
import "./styles/editor.css";
import "./styles/demo.css";
import "./styles/responsive.css";

const root = document.getElementById("root");
if (!root) throw new Error("Elemento #root não encontrado");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
