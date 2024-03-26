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
        signInRedirectURL: "https://localhost",
        signOutRedirectURL: "https://localhost",
        clientID: "fRunM7CicTg2usvlKffis1OPcdMa",
        baseUrl: "https://api.asgardeo.io/t/lcorp",
        scope: [ "profile", "openid"]
      }}
    >
      <App />
    </AuthProvider>

  </React.StrictMode>
);
