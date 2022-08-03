import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ".";

import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Checkoutpago from "./components/Checkoutpago";
import Chasupport from "./components/Chasupport";

import Filtertecnicos from "./components/Filtertecnicos";
import Questionandanswer from "./components/Questionandanswer";
import MyTickets from "./components/MyTickets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyTickets/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
