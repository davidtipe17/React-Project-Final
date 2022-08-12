import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";
import "../.././css/login.css";
import LogoFacebook from "../.././assets/img/facebook.svg";
import LogoGoogle from "../.././assets/img/google.svg";
import ImagesLateral from "../.././assets/img/login.svg";
import { FormloginUser } from "../../components";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);
const {userlogin, setUserLogin} = useState({

  correo: "",
  contrasena: "",
})
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log(data);
  await login(data.get("correo"), data.get("pass"));
};
// const logueando =  async () => {
//   const res = await login(userlogin)
//   console.log(res)
// }
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//   };
//   const handleInputChange = (event) => {                                                                                     
//     const { name, value } = event.target;
//     setUserLogin({
//       ...userlogin,
//       [name]: value,
//     });
//   };
  if (isAuth()) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="login-container-total">
      <main className="login-container-main">
        <div className="login-container-tridcontainer">
          <div className="login-information-container">
            <h1 className="title">Registrando</h1>
            <div className="social-login">
              <div className="social-login-element">
                <img src={LogoGoogle} alt="google-image" />
                <span>Google</span>
              </div>
              <div className="social-login-element">
                <img src={LogoFacebook} alt="facebook-image" />
                <span>Facebook</span>
              </div>
            </div>
            <p>or</p>
            <FormloginUser handleSubmit={handleSubmit}/>
            {/* <FormloginUser handleInputChange={handleInputChange} handleSubmit={handleSubmit} /> */}
          </div>
          <img className="image-container" src={ImagesLateral} alt="fondo" />
        </div>
      </main>
    </div>
  );
};

export default Login;
