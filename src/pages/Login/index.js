import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";
import "../.././css/login.css";
import LogoFacebook from "../.././assets/img/facebook.svg"
import LogoGoogle from "../.././assets/img/google.svg"
import ImagesLateral from "../.././assets/img/login.svg"

const Login = () => {

  const {login, isAuth} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("correo"), data.get("pass"));
  }

  if(isAuth()){
    return <Navigate to="/profile"/>;
  }

  return (
    <div>
      <main>
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title">Registrando</h1>
            <div className="social-login">
              <div className="social-login-element">
                <img src={LogoGoogle}alt="google-image" />
                <span>Google</span>
              </div>
              <div className="social-login-element">
                <img src={LogoFacebook}alt="facebook-image" />
                <span>Facebook</span>
              </div>
            </div>
            <p>or</p>
            <form className="inputs-container" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  id="correo"
                  name="correo"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  id="pass"
                  name="pass"
                  type="password"
                  className="form-control"
                  placeholder="*************"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="option-div">
                <input type="checkbox" />
                <span>RÉCUERDAME EN ESTE DISPOSITIVO</span>
              </div>
              <p>
                Olvidaste tu contrasena?{" "}
                <span className="span">Click here</span>
              </p>
              <button type="Submit" className="btn">NEXT</button>
              <button className="btn">Nuevo Usuario</button>
              <p>
                No tienes una cuenta? <span className="span">Sign Up</span>
              </p>
            </form>
          </div>

          <img className="image-container" src={ImagesLateral}alt="" />
        </div>
      </main>
    </div>
  );
};

export default Login;
