import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Container">
      <App />
    </div>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();