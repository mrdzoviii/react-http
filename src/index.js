import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
import {render} from 'react-snapshot'
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

render(<App />, document.getElementById("root"));
registerServiceWorker();
