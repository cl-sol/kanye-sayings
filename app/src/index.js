import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { appReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';

const logger = ({getState}) => next => action => {
  console.log("Dispatching action:", action);
  next(action);
};

let store = createStore(appReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);