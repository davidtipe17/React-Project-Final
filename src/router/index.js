import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Footer from "../pages/Footer"
// import Home from "../pages/Home";
import {Home, CheckOutPayment, Footer} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="check" element={<CheckOutPayment />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};
export default Router;
