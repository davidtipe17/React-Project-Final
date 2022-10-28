const FormloginUser = ({handleSubmit}) => {
    return (
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
                    placeholder="Contraseña"
                    aria-label="Contraseña"
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
            <button type="Submit" className="btn">
                NEXT
            </button>
            <p>
                No tienes una cuenta? <span className="span">Sign Up</span>
            </p>
        </form>
    )
}
export default FormloginUser;