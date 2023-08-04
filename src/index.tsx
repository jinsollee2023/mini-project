import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./common/Layout";
import GlobalStyle from "../GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
