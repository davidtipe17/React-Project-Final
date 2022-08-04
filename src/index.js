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

import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Login />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
