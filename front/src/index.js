import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routs.js';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

