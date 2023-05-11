import React from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage";
import "./App.css";

const app = document.getElementById("root");
// create a root
const root = createRoot(app);

root.render(
  <ThirdwebProvider activeChain="mumbai">
    <Router>
      <StateContextProvider>
        <App />
        {/* <LoginPage /> */}
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
