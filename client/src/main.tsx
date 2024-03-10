import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "@app/styles/index.css";
import "./shared/config/i18n/i18n.ts";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
