import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './trans/i18n';
import './trans/i18n'
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <CartProvider> 
       <App />
       </CartProvider>
      </I18nextProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
