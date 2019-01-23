import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

    document.getElementById("root"),
);

serviceWorker.unregister();
