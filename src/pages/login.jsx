const Login = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/images/support.svg" alt="" width="60" height="46" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div></div>
            <div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div class="login-container">
          <div class="login-info-container">
            <h1 class="title">Registrando</h1>
            <div class="social-login">
              <div class="social-login-element">
                <img src="/images/google.svg" alt="google-image" />
                <span>Google</span>
              </div>
              <div class="social-login-element">
                <img src="/images/facebook.svg" alt="facebook-image" />
                <span>Facebook</span>
              </div>
            </div>
            <p>or</p>
            <form class="inputs-container">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="*************"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="option-div">
                <input type="checkbox" />
                <span>RÉCUERDAME EN ESTE DISPOSITIVO</span>
              </div>
              <p>
                Olvidaste tu contrasena? <span class="span">Click here</span>
              </p>
              <button class="btn">NEXT</button>
              <button class="btn">Nuevo Usuario</button>
              <p>
                No tienes una cuenta? <span class="span">Sign Up</span>
              </p>
            </form>
          </div>

          <img class="image-container" src="/images/login.svg" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Login;
