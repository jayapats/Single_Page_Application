import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";

var cors = require('cors')
const root = ReactDOM.createRoot(document.getElementById('root'));
const oidcConfig = {
  authority: "https://oidc.viasat.io",
  client_id: "1y3hNstQzChHWotDVn8E",
  redirect_uri: "https://unifiedgc.viasat-io.com/login/generic_oauth",
  
};


root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
