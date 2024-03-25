import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "http://localhost:3000",
        signOutRedirectURL: "http://localhost:3000",
        clientID: "U2TbTmJ0ksNw4jBUKsijhy8XSA0a",
        baseUrl: "https://api.asgardeo.io/t/lcorp",
        scope: [ "profile", "openid",]
      }}
    >
      <App />
    </AuthProvider>

  </React.StrictMode>
);
