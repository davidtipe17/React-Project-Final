import { BrowserRouter, Routes, Route } from "react-router-dom";


import {
  Home,
  CheckOutPayment,
  Footer,
  MyTickets,
  FilterTecnicos,
  Chasupport,
  FormAddTicket,
  Login,
  Profile,
  QuestionAndAnswer,
  EditProfile,
} from "../pages";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditProfile/>} />
      
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
