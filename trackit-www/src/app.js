import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/styles.scss";

import { firebase } from "./firebase/firebase";
import configureStore from "./store/configureStore";

console.log("app running");

class App extends React.Component {
  render() {
    return <div />;
  }
}

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
