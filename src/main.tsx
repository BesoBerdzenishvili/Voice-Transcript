import React from "react";
import ReactDOM from "react-dom/client";
import { SpeechRecognitionProvider } from "./contexts/LangContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SpeechRecognitionProvider>
      <App />
    </SpeechRecognitionProvider>
  </React.StrictMode>
);
