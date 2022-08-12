import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { useState } from "react";
import "../../css/editProfile.css";
import { updateUserProfile } from "../../services";
const EditProfile = () => {
  const { user, updateUserAuth } = useContext(AuthContext);

  const [newProfile, setNewProfile] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setNewProfile({
      nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      direccion: data.get("direccion"),
    });
    console.log("newprofile", newProfile);
  };
  const updateProfile = async () => {
    const response = await updateUserProfile(user.id, newProfile);
    if (response.ok) {
      alert("datos actualizados");
    }
    
    // updateUserAuth({ ...user, newProfile:newProfile });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container-fluid fatherEditProfile"
      >
        <div className="containerEditProfile rounded-1">
          <div className="row">
            <div className="col-md-3 mt-5 mb-3"></div>
            <div className="col-md-9 bodyEditProfile pb-5">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {/* Editar Perfil */}
                  <div className="container mt-3">
                    <div className="card-header">
                      <h3>Detalles del Perfil</h3>
                    </div>
                    <div className="card-body">
                      <div className="card py-5 px-3 rounded-0">
                        <h4 className="mb-3">Nombre</h4>
                        <div className="row w-100 d-flex">
                          <div className="col-md-6 mb-3">
                            <h5 clas>Primer Nombre</h5>
                            <input
                              className="form-control"
                              type="text"
                              name="nombre"
                              id=""
                              onChange=""
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <h5>Apellido</h5>
                            <input
                              className="form-control"
                              type="text"
                              name="apellido"
                              id=""
                            />
                          </div>

                          <card className="card-body d-flex ">
                            <div className="row">
                              <div className="col">
                                <h6>Name Actual</h6>
                                <span>{user.name}</span>
                              </div>
                              <div className="col">
                                <h6>Name Actual</h6>
                                <span>{user.apellido}</span>
                              </div>
                            </div>
                          </card>
                        </div>
                      </div>
                      <div className="card py-5 px-3 rounded-0">
                        <h4 className="mb-3">Dirección</h4>

                        <h5 clas>Dirección</h5>
                        <input
                          className="form-control"
                          type="text"
                          name="direccion"
                          id=""
                        />
                        <card className="card-body d-flex ">
                          <div className="row">
                            <div className="col">
                              <h6>Direccion Actual</h6>
                              <span>{user.direccion}</span>
                            </div>
                          </div>
                        </card>
                        {/* guardar cambios */}
                        <hr className="mt-5" />
                        <button
                          onClick={updateProfile}
                          type="submit"
                          className="py-3 rounded btn btn-primary"
                        >
                          Guardar ajustes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editar Clave */}
                <div className="container mt-3">
                  <div className="card-header">
                    <h3>Clave</h3>
                  </div>
                  <div className="card-body">
                    <div className="card py-5 px-3 rounded-0">
                      <h4 className="mb-3">Cambiar Contraseña</h4>
                      <h5 clas>Contraseña</h5>
                      <div class="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <span
                            class="input-group-text bg-white"
                            id="basic-addon1"
                          >
                            <i class="fa-solid fa-eye-low-vision"></i>
                          </span>
                        </div>
                      </div>
                      <h5 clas>Nueva Contraseña</h5>
                      <div class="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="newpassword"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <span
                            class="input-group-text bg-white"
                            id="basic-addon1"
                          >
                            <i class="fa-solid fa-eye-low-vision"></i>
                          </span>
                        </div>
                      </div>

                      <h5 clas>Confirmar Contraseña</h5>
                      <div class="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="confirmpassword"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <span
                            class="input-group-text bg-white"
                            id="basic-addon1"
                          >
                            <i class="fa-solid fa-eye-low-vision"></i>
                          </span>
                        </div>
                      </div>

                      {/* guardar cambios */}
                      <hr />
                      <button className="py-3 rounded btn btn-primary">
                        Guardar ajustes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditProfile;
