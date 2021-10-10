import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import store from './redux/store';
import { myAction, myAction2 } from "./redux/actions";

console.log(store);
console.log(store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
