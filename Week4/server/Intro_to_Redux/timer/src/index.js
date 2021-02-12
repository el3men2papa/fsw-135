import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./reducers/configureStore";
import Root from "./components/Root";
import "./App.css"

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
