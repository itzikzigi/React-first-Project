import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PageProvider from "./Components/PageProvider.tsx";
import IDProvider from "./Components/IdProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageProvider>
      <IDProvider>
        <App />
      </IDProvider>
    </PageProvider>
  </React.StrictMode>
);
