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
  EditProfile,ñ
} from "../pages";

import { HeaderBar } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


       

        <Route element={<HeaderBar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/questions" element={<QuestionAndAnswer />} />
          <Route path="/filters" element={<FilterTecnicos />} />
          <Route path="/form" element={<FormAddTicket />} />
          <Route path="/contact" element={<EditProfile />} />
          <Route path="/chatsupport" element={<Chasupport />} />
          <Route path="/checkoutpayment" element={<CheckOutPayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
