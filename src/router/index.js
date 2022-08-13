import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  CheckOutPayment,
  MyTickets,
  FilterTecnicos,
  Chasupport,
  FormAddTicket,
  LoginUser,
  Profile,
  Questionandanswer,
  EditProfile,
  SignUp,
} from "../pages";

import { HeaderBar, HeaderBarPublic } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderBarPublic/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<HeaderBar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/questions" element={<Questionandanswer />} />
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
