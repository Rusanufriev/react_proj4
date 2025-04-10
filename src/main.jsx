import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./App.jsx";
import App from "/src/components/pages/buttons/button.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
