import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/base/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoutesApp />
    <GlobalStyle />
  </React.StrictMode>
);
