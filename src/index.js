import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/reset.scss";
// import './utils/rem.js'
// import * as serviceWorker from './serviceWorker';
import store from './store/index.js'
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
