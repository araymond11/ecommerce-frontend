import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './locales/locales';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/cart-context';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
