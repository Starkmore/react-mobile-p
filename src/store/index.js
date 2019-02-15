import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { homeRedurces } from "./home.js";
import {footerBarRedurces}  from './footerBar.js'
const store = createStore(
  combineReducers({
    homeRedurces,footerBarRedurces
  }),compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
 
);

export default store;
