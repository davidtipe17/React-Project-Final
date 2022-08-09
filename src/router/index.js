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

        <Route path="/editProfile" element={<EditProfile/>} />
    
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/questions" element={<QuestionAndAnswer />} />
        <Route path="/filters" element={<FilterTecnicos />} />
        <Route path="/form" element={<FormAddTicket />} />
        <Route path="/contact" element={<EditProfile />} />
        <Route path="/chatsupport" element={<Chasupport />}  />
        <Route path="/checoutpayment" element={< CheckOutPayment/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
