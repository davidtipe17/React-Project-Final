import "../../css/tickets.css";

const MyTickets = () => {
  return (
    <div>
      <div className="container  tickets-container mt-5">
        <div className="cardHeader row justify-content-between py-3">
            <div className="col-sm-3">
            <h2 className="tickets-title-responsive">Tickets</h2>
            </div>
          <div className=" col-sm-5 mt-2">
            <button className="btn btn-primary shadow rounded ">
               Cliente
            </button>
            <button className="btn btn-gray  shadow rounded ">
              Autonomo
            </button>
          </div>
        </div>
        <div className="card">
          <ul
            className="nav nav-tabs listnavbar-responsive"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="tickets-Abiertos-tab"
                data-bs-toggle="tab"
                data-bs-target="#ticketsAbiertos"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Abiertos
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tickets-En-Proceso-tab"
                data-bs-toggle="tab"
                data-bs-target="#ticketsEnProceso"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                En Proceso
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tickets-Pendientes-tab"
                data-bs-toggle="tab"
                data-bs-target="#ticketsPendientes"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Pendientes
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tickets-Resueltos-tab"
                data-bs-toggle="tab"
                data-bs-target="#ticketsResueltos"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Resueltos
              </button>
            </li>
          </ul>
          {/* filtro */}
          <div className="container filtro">
            <div className="row d-flex justify-content-between">
              <div className="col-sm-6 filtro">
                <div class="input-group my-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Descripcion..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Filtrar
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="input-group my-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="N° Ticket"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Filtrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-content tickets-list d-flex justify-content-center  align-items-center bg-white"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active"
              id="ticketsAbiertos"
              role="tabpanel"
              aria-labelledby="tickets-Abiertos-tab"
            >
              <div className="container text-center">
                <h3>Crea un nuevo proyecto</h3>
                <p>
                  Millones de talentosos freelancers estan listos para ayudarte
                  a hacer cosas increibles
                </p>
                <button className="btn-publicarProyecto p-2 rounded shadow">
                  Publicar Proyecto
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ticketsEnProceso"
              role="tabpanel"
              aria-labelledby="tickets-En-Proceso-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="ticketsPendientes"
              role="tabpanel"
              aria-labelledby="tickets-Pendientes-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="ticketsResueltos"
              role="tabpanel"
              aria-labelledby="tickets-Resueltos-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTickets;
