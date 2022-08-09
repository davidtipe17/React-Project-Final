import "../../css/editProfile.css";
const EditProfile = () => {
  return (
    <div>
      <div className="container-fluid fatherEditProfile">
        <div className="containerEditProfile rounded-1">
          <div className="row">
            <div className="col-md-3 mt-5 mb-3">
              <div
                class="nav d-flex flex-md-column justify-content-center nav-pills navigationBarEdit mx-3 "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
               
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Perfil
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Clave
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Pago y Finanzas
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Confianza y Verificacion
                </button>
              

                
              </div>
            </div>
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
                              name=""
                              id=""
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <h5>Apellido</h5>
                            <input
                              className="form-control"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card py-5 px-3 rounded-0">
                        <h4 className="mb-3">Dirección</h4>
                        <h5 clas>Dirección</h5>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                        />
                        {/* guardar cambios */}
                        <hr className="mt-5" />
                        <button className="py-3 rounded btn btn-primary">
                          Guardar ajustes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
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
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  {/* Editar Pago y Finanzas */}
                  <div className="container mt-3 ">
                    <div className="card-header">
                      <h3>Pago y Finanzas</h3>
                    </div>
                    <div className="card-body ">
                      <div className="card py-4 px-3 rounded-0">
                        <div className="card px-3 rounded-0">
                          <h4 className="mb-3 mt-3">Métodos de pago</h4>
                          <button className="col-md-3 rounded py-1 border border-dark mb-4">
                            + Añadir método de pago
                          </button>
                        </div>
                        <div className="card px-3 py-2 rounded-0">
                          <h4 className="mb-3 mt-3">
                            Configuración de finanzas
                          </h4>
                          <h5>Mi moneda</h5>

                          <div class="col-md-6">
                            <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Selecciona una moneda</option>
                            <option value="1">Sol Peruano</option>
                            <option value="2">Inti</option>
                            <option value="3">Bolivar</option>
                           </select>
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
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  {/* Editar confianza y verificacion */}
                  <div className="container mt-3">
                    <div className="card-header">
                      <h3>Confianza y Verificación</h3>
                    </div>
                    <div className="card-body">
                      <div className="card py-4 px-3">
                        <div className="card px-3 rounded-0">
                          <h4 className="mb-3 mt-3">
                            ¿Qué es una puntación de confianza?
                          </h4>
                          <p>
                            El tecnico Trust Score es el núcleo de cómo
                            manejamos la verificación, la confianza y los pagos.
                            El Trust Score es un valor que indica hasta que
                            punto hemos podido verificar quién dice ser un
                            usuario. Los empleadores y trabajadores autónomos
                            con los que es mas seguro trabajar son aquellos que
                            se esfuerzan por verificarse.
                          </p>
                        </div>
                        <div className="card px-3 py-2 rounded-0">
                          <h4 className="mb-3 mt-3">Barra de progreso</h4>
                          <h5>Mi moneda</h5>
                        </div>
                        <div className="card px-3 py-4 rounded-0">
                          <div className="row d-flex justify-content-between card-responsive">
                            <div class="col-md-6">
                               <h5>Direccion de correo electrónico</h5>
                            </div>
                            <div class="col-md-3">
                              <span className="visually-hidden">
                                Verificado &nbsp;
                              </span>
                              <button className="btn btn-primary ml-2">
                                5 puntos
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="card px-3 py-4 rounded-0">
                          <div className="row d-flex justify-content-between card-responsive">
                            <div class="col-md-6">
                              <h5>Número de télefono</h5>
                            </div>
                            <div class="col-md-3">
                              <span className="visually-hidden">
                                Verificado &nbsp;
                              </span>
                              <button className="btn btn-secondary ml-2">
                                10 puntos
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card px-3 py-4 rounded-0">
                          <div className="row d-flex justify-content-between card-responsive">
                            <div class="col-md-6">
                               <h5>Facebook</h5>
                            </div>
                            <div class="col-md-3">
                              <span className="visually-hidden">
                                Verificado &nbsp;
                              </span>
                              <button className="btn btn-secondary ml-2">
                                20 puntos
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card px-3 py-4 rounded-0">
                          <div className="row d-flex justify-content-between card-responsive">
                            <div class="col-md-6">
                               <h5>Linkedin</h5>
                            </div>
                            <div class="col-md-3">
                              <span className="visually-hidden">
                                Verificado &nbsp;
                              </span>
                              <button className="btn btn-secondary ml-2">
                                20 puntos
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card px-3 py-4 rounded-0">
                          <div className="row d-flex justify-content-between card-responsive">
                            <div class="col-md-6">
                              <h5>Autenticar Tarjeta de Crédito o Debito</h5>
                            </div>
                            <div class="col-md-3">
                              <span className="visually-hidden">
                                Verificado &nbsp;
                              </span>
                              <button className="btn btn-secondary ml-2">
                                45 puntos
                              </button>
                            </div>
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
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
