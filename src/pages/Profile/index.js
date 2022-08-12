import imagenprofile from "../../assets/img/profile.png";
import "../.././css/profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { updateUser } from "../../services";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserAuth } = useContext(AuthContext);

  // console.log(userlist);
  // const [userProfile, setUserProfile] = useState(user);

  const editUser = async () => {
    const response = await Swal.fire({
      title: "Edita la Profesion",
      input: "text",
      inputValue: user.profesion,
      inputPlaceholder: "Ingresa la profesion a actualizar",
      inputValidator: (value) => {
        if (!value) {
          return "Escribe algo!";
        }
      },
    });
    await updateUser(user.id, response.value);
    updateUserAuth({ ...user, profesion: response.value });
  };

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
                          <i class="fa-solid fa-clock"></i> &nbsp;q{" "}
                          {user.horadedesconexion}
                        </div>
                        <div class="p-2">
                          <i class="fa-solid fa-user-check"></i> &nbsp; Se unió
                          el {user.createdAt}
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
                          <div class="col-6">{user.name}</div>
                          <div class="col-6">{user.correo}</div>
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={editUser}
                        >
                          <i className="far fa-edit"></i>
                          <b> Edit Profile</b>
                        </button>
                        <div
                          class="modal fade"
                          id="exampleModalProfile"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Edita Profile
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
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
                                              <div class="col-6">
                                                Nombre de Usuario
                                              </div>
                                              <div class="col-6">
                                                @Correosindominio
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
                                                Professional Headline
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
                                                Description
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
                                              <button
                                                class="btn btn-primary"
                                                type="button"
                                              >
                                                Save
                                              </button>
                                            </div>
                                            <div className="p-2">
                                              <button
                                                class="btn btn-primary"
                                                type="button"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" class="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col ">{user.profesion}</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col">Estrellas</div>
                      <div class="col"></div>
                    </div>
                    <div class="row d-flex flex-column mt-2">
                      <div class="col p-2">
                        <h6 className="name-js">Description</h6>
                      </div>
                      <div class="col p-2">
                        <p>{user.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRIMER MODULO LATERAL */}

            {/* <div className="row z-depth-3 card mt-5">
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
            </div> */}

            <div className="row z-depth-3 card mt-5 mb-5">
              <div class="col-12  mb-5">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Education</h5>
                    </div>
                    <div class="ms-auto p-2">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Add Education
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                ADD EDUCATION
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body mb-3">
                              <div class="row">
                                <div class="col">
                                  <div class="mb-4">
                                    <label
                                      for="exampleFormControlInput1"
                                      class="form-label"
                                    >
                                      Country
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select Country</option>
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
                                      University/College
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Select University/College
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                  >
                                    Degree
                                  </label>
                                  <input
                                    type="email"
                                    class="form-control border-success"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                  />
                                </div>
                              </div>

                              <div class="row mt-4 ">
                                <div class="col ">
                                  <div class="row ">
                                    <div class="col-5">
                                      <label
                                        for="exampleFormControlInput1"
                                        class="form-label"
                                      >
                                        Start year
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

                                    <div class="col-5">
                                      <label
                                        for="exampleFormControlInput1"
                                        class="form-label"
                                      >
                                        End year
                                      </label>
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
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {user.educacion.length > 0 &&
                  user.educacion.map((user, index) => (
                    <div class=" mb-3  card-body " key={index} user={user}>
                      <div class=" mb-3">
                        <div class="p-2">
                          <div className="row">
                            <div className="col">
                              <h5>{user.degree}</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span>{user.university}, </span>
                              &nbsp;
                              <span>{user.country}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span>{user.start} - </span>
                              &nbsp;
                              <span>{user.end}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>

            <div className="row z-depth-3 card mt-5 mb-5">
              <div class="col-12  mb-5">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Experience</h5>
                    </div>
                    <div class="ms-auto p-2">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      >
                        Add Experience
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal3"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                ADD EXPERIENCE
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body mb-3">
                              <div class="row">
                                <div class="col">
                                  <div class="mb-4">
                                    <label
                                      for="exampleFormControlInput1"
                                      class="form-label"
                                    >
                                      Titulo Profesional
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
                                      Compania
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

                              <div class="row mt-3 ">
                                <div class="col">
                                  <div class>
                                    <label
                                      for="exampleFormControlInput1"
                                      class="form-label"
                                    >
                                      Resumen
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
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {user.experience.length > 0 &&
                  user.experience.map((user, index) => (
                    <div class=" mb-3  card-body ">
                      <div class=" mb-3">
                        <div class="p-2">
                          <div className="row">
                            <div className="col">
                              <h5>{user.Title}</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h5>{user.company}</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span>{user.start} - </span>
                              &nbsp;
                              <span>{user.end}</span>
                            </div>
                          </div>
                          <div className="row">
                            <p>{user.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* COLUMN TWO */}
          <div className="col-3">
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
