import imagenprofile from "../../assets/img/profile.png";
import "../.././css/profile.css";

const Profile = () => {
  return (
    <div className="container-total-profile">
      <div className="container-content ">
        <div className="row justify-content-between">
          <div className="col-md-8 ">
            <div className="row mt-5 mb-2">
              <div class="col-12  mb-1">
                <div class="d-flex ">
                  <div class="ms-auto p-2">
                    <button type="button" class="btn btn-light ">
                      <b> View Client Profile </b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* PRIMER MODULO LATERAL */}
            <div className="row">
              <div className="col 12 card">
                <div className="row">
                  <div className="col-4 border-right">
                    <div className="text-black d-flex flex-column mt-3">
                      <div className=" ">
                        <img
                          className="card-img"
                          src={imagenprofile}
                          alt="profile"
                        />
                      </div>
                      <div class="d-flex flex-column mb-3 p-2">
                        <div class="p-2">
                          <i class="fa-solid fa-signal"></i> &nbsp; I'm Offline!
                        </div>
                        <div class="p-2">
                          <i class="fa-solid fa-flag"></i> &nbsp; Flex item 2
                        </div>
                        <div class="p-2">
                          <i class="fa-solid fa-clock"></i> &nbsp; Ultima Hora
                          Conectado
                        </div>
                        <div class="p-2">
                          <i class="fa-solid fa-user-check"></i> &nbsp; Se unió
                          el
                          <span className="dateforlogin">
                            {" "}
                            24 de julio de 2022
                          </span>
                        </div>
                        <div class="p-2">
                          <i class="fa-solid fa-thumbs-up"></i>{" "}
                          <span className="counterrecomendation">0</span>
                          &nbsp; Recomendaciones
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-2 ">
                    <div class="row mt-2">
                      <div class="col ">
                        <div class="row ">
                          <div class="col-6">Nombre de Usuario</div>
                          <div class="col-6">@Correosindominio</div>
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end">
                        <button type="button" className="btn btn-primary">
                          <i className="far fa-edit"></i>
                          <b> Edit Profile</b>
                        </button>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col ">Carrera</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col">Estrellas</div>
                      <div class="col"></div>
                    </div>
                    <div class="row mt-2">
                      <div class="col">col</div>
                      <div class="col">col</div>
                      <div class="col">col</div>
                      <div class="col">col</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col">col</div>
                      <div class="col">col</div>
                      <div class="col">col</div>
                      <div class="col">col</div>
                    </div>
                    <div class="row d-flex flex-column mt-2">
                      <div class="col p-2">
                        <h6 className="name-js">Description</h6>
                      </div>
                      <div class="col p-2">
                        <p>
                          Diseñar, programar, aplicar y mantener sistemas
                          informáticos. Administrar redes y sistemas de
                          información. Optimizar los datos que maneja una
                          empresa. Investigar para crear software y hardware en
                          una
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRIMER MODULO LATERAL */}
            {/* PRIMER MODULO LATERAL EDITAR */}

            <div className="row mt-5">
              <div className="col 12 card">
                <div className="row">
                  <div className="col-4 border-right">
                    <div className="text-black d-flex flex-column mt-3">
                      <div className="">
                        <img
                          className="card-img container-imagenprofile"
                          src={imagenprofile}
                          alt="profile"
                        ></img>

                        <button
                          type="button"
                          class="btn btn-link container-fondo-profile-edit"
                        >
                          <i class="fa-solid iconrelative fa-file-image"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-2 ">
                    <div class="row mt-2">
                      <div class="col d-flex justify-content-start">
                        <div class="row ">
                          <div class="col-6">Nombre de Usuario</div>
                          <div class="col-6">@Correosindominio</div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-1 ">
                      <div class="col">
                        <div class>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Email address
                          </label>
                          <div class="input-group">
                            <textarea
                              class="form-control"
                              aria-label="With textarea"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-1 ">
                      <div class="col">
                        <div class>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Email address
                          </label>
                          <div class="input-group">
                            <textarea
                              style={{ height: "150px" }}
                              class="form-control"
                              aria-label="With textarea"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col d-flex justify-content-end">
                        <div className="p-2">
                          <button class="btn btn-primary" type="button">
                            Save
                          </button>
                        </div>
                        <div className="p-2">
                          <button class="btn btn-primary" type="button">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRIMER MODULO LATERAL EDITAR */}

            <div className="row z-depth-3 card mt-5">
              <div class="col-12  mb-5">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Portfolio Items</h5>
                    </div>
                    <div class="ms-auto p-2">
                      <button type="button" class="btn btn-primary">
                        Add Portfolio
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-3 card-body justify-content-center">
                  <div
                    class="d-flex align-items-center justify-content-center flex-column mb-3"
                    style={{ height: "250px" }}
                  >
                    <div class="p-2">
                      <img
                        src="https://www.f-cdn.com/assets/main/en/assets/portfolio/illustration.svg"
                        alt=""
                      />
                    </div>
                    <div class="p-2">No portafolio items have been added</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row z-depth-3 card mt-5">
              <div class="col-12  mb-5">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Experiencia</h5>
                    </div>
                    <div class="ms-auto p-2">
                      <button type="button" class="btn btn-primary">
                        Add Experience
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-3 card-body justify-content-center">
                  <div
                    class="d-flex align-items-center justify-content-center flex-column mb-3"
                    style={{ height: "100px" }}
                  >
                    <div class="p-2">
                      No experience information has been added.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CUADRO PARA EDITAR EXPERIENCIA */}
            <div className="row card mt-5 mb-5">
              <div class="col-12  mb-1">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Experi!!!!enciaa</h5>
                    </div>
                  </div>
                </div>
                <div class="mb-3 card-body p-0 ">
                  <div class="row">
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row ">
                    <div class="col ">
                      <div class="row ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Start
                        </label>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col ">
                      <div class="row ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Final
                        </label>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3 ">
                    <div class="col">
                      <div class>
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <div class="input-group">
                          <textarea
                            style={{ height: "180px" }}
                            class="form-control"
                            aria-label="With textarea"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col d-flex justify-content-end">
                      <div className="p-2">
                        <button class="btn btn-primary" type="button">
                          Save
                        </button>
                      </div>
                      <div className="p-2">
                        <button class="btn btn-primary" type="button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CUADRO PARA EDITAR EXPERIENCIA */}

            <div className="row z-depth-3 card mt-5 mb-5">
              <div class="col-12  mb-5">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Education</h5>
                    </div>
                    <div class="ms-auto p-2">
                      <button type="button" class="btn btn-primary">
                        Add Education
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-3 card-body justify-content-center">
                  <div
                    class="d-flex align-items-center justify-content-center flex-column mb-3"
                    style={{ height: "100px" }}
                  >
                    <div class="p-2">
                      No education information has been added.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CUADRO PARA EDITAR EDUCATION */}

            <div className="row card mt-5 mb-5">
              <div class="col-12  mb-1">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Educatioooon@@!!@!@</h5>
                    </div>
                  </div>
                </div>
                <div class="mb-3 card-body p-0 ">
                  <div class="row">
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control border-success"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div class="row mt-3 ">
                    <div class="col ">
                      <div class="row ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Start
                        </label>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col ">
                      <div class="row ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Final
                        </label>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-end">
                      <div className="p-2">
                        <button class="btn btn-primary" type="button">
                          Save
                        </button>
                      </div>
                      <div className="p-2">
                        <button class="btn btn-primary" type="button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CUADRO PARA EDITAR EDUCATION */}
          </div>
          {/* COLUMN TWO */}
          <div className="col-md-3">
            <div className="row">
              <div className="col-12 card justify-content-center margintoplateraltwo">
                <div className="row">
                  <div className="d-flex mb-3 card-header">Verification</div>
                </div>
                <div className="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-address-card"></i> Profile
                        Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-credit-card"></i> Payment Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-envelope"> </i> Email Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        <i class="fa-solid fa-circle-nodes"></i> social networks
                        Connected
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 card justify-content-center mt-5">
                <div className="row">
                  <div className="d-flex mb-3 card-header">Verification</div>
                </div>
                <div className="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-address-card"></i> Profile
                        Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-credit-card"></i> Payment Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        {" "}
                        <i class="fa-solid fa-envelope"> </i> Email Verified
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Verify
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div className="row">
                      <div class="p-2">
                        <i class="fa-solid fa-circle-nodes"></i> social networks
                        Connected
                      </div>
                    </div>
                    <button type="button" class="btn btn-link">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
