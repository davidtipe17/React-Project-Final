const EdidPassword = ({ handleInputChange, handleInputChangePassword }) => {
  return (
    <div className="container mt-3">
      <div className="card-header">
        <h3>Clave</h3>
      </div>
      <div className="card-body">
        <div className="card py-5 px-3 rounded-0">
          <h4 className="mb-3">Cambiar Contraseña</h4>

          <div class="col-md-6">
            <div class="input-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                name="confirmpassword"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                id="input_confirmcontrasena"
              />
              <span class="input-group-text bg-white" id="basic-addon1">
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
  );
};
export default EdidPassword;
