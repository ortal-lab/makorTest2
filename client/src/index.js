import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import data from "./redux/reducers/data";
import { initialStore } from "./redux/middlware";
import actions from "./redux/actions";
 
const reducers = combineReducers({ data });
const store = createStore(reducers, applyMiddleware(initialStore));

window.store = store;
//store.dispatch(actions.getData());

ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
        <App />
    </Provider>,  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
