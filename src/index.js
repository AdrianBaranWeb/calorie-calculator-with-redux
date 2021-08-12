import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhancers())}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
