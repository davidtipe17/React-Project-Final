const EditUpdateProfile = ({user, newProfile,  handleInputChange }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-home"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >

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
                  value={newProfile.nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <h5>Apellido</h5>
                <input
                  className="form-control"
                  type="text"
                  name="apellido"
                  value={newProfile.apellido}
                  onChange={handleInputChange}
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
              value={newProfile.direccion}
              onChange={handleInputChange}
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
            <button type="submit" className="py-3 rounded btn btn-primary">
              Guardar ajustes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUpdateProfile;