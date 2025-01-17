import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/store/store.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Config } from "../auth0-config.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider {...auth0Config}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
