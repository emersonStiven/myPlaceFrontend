import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppWrapper } from "./Pages/AppWrapper.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.Suspense>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.Suspense>
);
