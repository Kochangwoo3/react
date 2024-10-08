import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

/*
  const rootElement = document.getElementById("root");
  ReactDOM.render (
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  )
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
