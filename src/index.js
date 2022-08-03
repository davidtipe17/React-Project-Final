import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import CheckOutPayment from "./components/CheckOutPayment";
import Chasupport from "./components/Chasupport";
import Login from "./components/Login";
import FilterTecnicos from "./components/FilterTecnicos";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import MyTickets from "./components/MyTickets";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
