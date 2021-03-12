import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
