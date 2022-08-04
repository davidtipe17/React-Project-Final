import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Chasupport,
  CheckOutPayment,
  EditProfile,
  FilterTecnicos,
  Footer,
  FormAddTicket,
  Login,
  MyTickets,
  Profile,
  QuestionAndAnswer,
} from "../../src/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
