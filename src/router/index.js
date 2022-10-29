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
  Forum,
  Thread,
  FormAddPost,
  FormAddComment
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
          <Route path="/form" element={<FormAddPost />} />
          <Route path="/contact" element={<EditProfile />} />
          <Route path="/chatsupport" element={<Chasupport />} />
          <Route path="/checkoutpayment" element={<CheckOutPayment />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/thread/:id" element={<Thread />} />
         

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
