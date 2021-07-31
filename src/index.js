import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import AuthenticationProvider from './authenticationProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


