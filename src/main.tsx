import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import BarcodeResultPage from "./pages/BarcodeResultPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="scan-results" element={<BarcodeResultPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
