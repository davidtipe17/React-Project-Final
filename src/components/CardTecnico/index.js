import imagenprofile from "../../assets/img/profile.png";
import "../.././css/Filtertecnicos.css";

const CardTecnico = ({ user }) => {
  function createStars(number) {
    var elements = [];
    for (let i = 0; i < Math.round(number * 0.05); i++) {
      elements.push(<i class="fa-solid fa-star"></i>);
    }
    return elements;
  }

  return (
    <div className="card-body border-bottom">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center">
          <img className="card-img m-auto" src={imagenprofile} alt="profile" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <div className="row mt-4 mb-2">
                <div className="col">
                  <strong class="h5">
                    {user.name + " " + Array.from(user.apellido)[0] + "."}
                  </strong>
                </div>
                <div className="col">{"@" + user.nickname}</div>
                <div className="col-1">o</div>
                <div className="col-1">o</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">{createStars(user.reputacion)}</div>
            <div className="col">{user.pais}</div>

            <div className="col">
              <i class="flag flag-united-states"></i>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <strong>{user.role}</strong>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{user.descripcion}</p>
            </div>
          </div>
          <div className="row mb-4">
            {user.especialidades.map((especialidad) => (
              <div className="col">{especialidad}</div>
            ))}
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-evenly">
          <div className="row mt-3">
            <div className="col d-flex flex-column">
              <h6 className="d-flex justify-content-end">
                {"$" + user.precioxhora + " " + "USD"}
              </h6>
              <span className="d-flex justify-content-end">Por hora</span>
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col d-flex flex-column">
              <div className=" d-flex justify-content-end">
                <i className="fa-solid fa-heart coloriconheart "></i>
              </div>
              <div className="mt-3 d-flex justify-content-end">
                <button type="button" className="btn btn-primary  rounded-1">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTecnico;
