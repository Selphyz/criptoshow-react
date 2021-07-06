import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL="https://api.coingecko.com/api/v3";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
