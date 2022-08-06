import { useState } from "react";
import "../../css/FormAddTicket.css";
const FormAddTicket = () => {
  const [displayChangeButton, setdisplayChangeButton] = useState("");
  const [displayChange, setdisplayChange] = useState("d-none");
  const [displayChangeSecondButton, setdisplayChangeSecondButton] =
    useState("");
  const [displaySecondChange, setdisplaySecondChange] = useState("");

  const viewSecondPart = () => {
    setdisplayChange("d-block");
    setdisplayChangeButton("d-none");
  };
  const viewThirdPart = () => {};
  return (
    <div>
      <div className="container FormAddTicket-container">
        <div className="FormAddTicket-Background">
          <div className="mx-5 mb-5">
            <h2 className="">Dinos que necesitas hacer</h2>
            <p className="first-p">
              Póngase en contacto con trabajadores independientes calificados en
              cuestión de minutos. Ver perfiles, calificaciones, carteras y
              chatear con ellos. Paga al freelancer solo cuando estés 100%
              satisfecho con su trabajo
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card FormAddTicket-card-container rounded-0">
              <div className="p-3">
                <h4>Elige un titulo para tu ticket</h4>
                <input
                  type="text"
                  class="form-control rounded-0"
                  id="#"
                ></input>
                <h4 className="mt-3">Cuentanos más sobre tu proyecto</h4>
                <textarea class="form-control" id="#" rows="4"></textarea>
                <div className="my-3">
                  <label for="formFile" className="form-label">
                    Inserta una imagen
                  </label>
                  <input
                    className="form-control rounded-0"
                    type="file"
                    id="formFile"
                  />
                </div>
                <button
                  type="button"
                  className={`btn btn-success rounded-0 px-4 ${displayChangeButton}`}
                  onClick={viewSecondPart}
                >
                  Next
                </button>
              </div>
              {/* segunda Parte */}
              <div
                className={`p-3 FormAddTicket-SecondPart ${displayChange} mt-5`}
              >
                <h5 className="mx-3">¿Comó te gustaria hacerlo?</h5>
                <div className="card first-card d-flex m-auto rounded-0 shadow-sm mt-5">
                  <div className="row ">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      <i class="fa-solid fa-computer"></i>
                    </div>
                    <div className="col-md-7 pt-3">
                      <h6>Publicar un Ticket</h6>
                      <p>
                        Reciba cotizaciones gratis, mejor cuando tiene una idea
                        especifica, else ticket no es de naturaleza visual o el
                        ticket es complejo.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={`btn btn-success rounded-0 px-4 ${displayChangeSecondButton}`}
                  onClick={viewThirdPart}
                >
                  Next
                </button>
              </div>
              {/* Tercera Parte */}
              <div
                className={`p-3 FormAddTicket-ThirdPart ${displaySecondChange} mt-5`}
              >
                <h5 className="mx-3">¿Cual es tu presupuesto?</h5>
                <div className="row my-5">
                  <div className="col-6 col-md-4">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Moneda</option>
                      <option value="1">sol</option>
                      <option value="2">Inti</option>
                      <option value="3">Bolivar</option>
                    </select>
                  </div>
                  <div className="col-6 col-md-4">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Presupuesto</option>
                      <option value="1">Basic(50 - 100)</option>
                      <option value="2">Medium(100 - 150)</option>
                      <option value="3">Hard(150-200)</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  className={`btn btn-success rounded-0 px-4 ${displayChangeSecondButton}`}
                  onClick={viewThirdPart}
                >
                  Next
                </button>
              </div>
              {/* Cuarta Parte */}
              <div
                className={`p-3 FormAddTicket-SecondPart ${displayChange} mt-5`}
              >
                <h5 className="mx-3">¿Comó te gustaria hacerlo?</h5>
                <div className="card first-card d-flex m-auto rounded-0 shadow-sm mt-5">
                  <div className="row ">
                    <div className="col-sm-5 d-flex justify-content-center align-items-center">
                      <i class="fa-solid fa-computer"></i>
                    </div>
                    <div className="col-sm-7 pt-3">
                      <h6>Proyecto Estandar</h6>
                      <p>
                        Gratis para publicar su proyecto se pondra en marcha al
                        instante y comenzara a recibir ofertas en cuestion de
                        segundos.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={`btn btn-success rounded-0 px-4 ${displayChangeSecondButton}`}
                  onClick={viewThirdPart}
                >
                  Next
                </button>
              </div>
              {/* Quinta Parte */}
              <div
                className={`p-3 FormAddTicket-FifthPart ${displayChange} mt-5`}
              >
                <h5 className="mx-3">¿Son correctos estos detalles?</h5>
                <div className="card fifth-card d-flex m-auto rounded-0 shadow-sm my-5 py-4">
                  <div className="row ">
                    <div className="col-sm-5 d-flex justify-content-center align-items-center">
                      <i class="fa-solid fa-computer"></i>
                    </div>
                    <div className="col-sm-7 pt-3">
                      <h6>Proyecto Estandar</h6>
                      <p>
                        Gratis para publicar su proyecto se pondra en marcha al
                        instante y comenzara a recibir ofertas en cuestion de
                        segundos.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-success rounded-0 px-40 py-3 "
                >
                  Si, Publicar Mi Solucitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormAddTicket;
