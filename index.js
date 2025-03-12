import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing CSS
import App from './App'; // Importing the App component
import reportWebVitals from './reportWebVitals';

// Rendering the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// For measuring performance (optional)
reportWebVitals();
