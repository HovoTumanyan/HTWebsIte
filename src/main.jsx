import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./i18n";
import AppProvider from "./components/AppProvider/AppProvider.jsx";
import "./App.css";


createRoot(document.getElementById("root")).render(
  <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </AppProvider>
);
