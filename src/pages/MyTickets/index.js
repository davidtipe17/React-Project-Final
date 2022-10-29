import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context";
import { searchTickets } from "../../services";
import { FilterTicketOpen } from "../../components";
import { FilterTicketProcess } from "../../components";
import { FilterTicketPendient } from "../../components";
import { TicketFilterSuccesfull } from "../../components";
const MyTickets = () => {
  const [ticketList, setTicketList] = useState([]);

  const { user } = useContext(AuthContext);

  const fetchTickets = async () => {
    const data = await searchTickets();
    setTicketList(data);
  };
  const filteredTicketsOpen = ticketList.filter(
    (ticket) => ticket.state === "Abierto" && ticket.idCreator === user.id
  );
  console.log(filteredTicketsOpen);
  const filteredTicketsProcess = ticketList.filter(
    (ticket) => ticket.state === "Proceso" && ticket.idSolver === user.id
  );
  const filteredTicketsPendient = ticketList.filter(
    (ticket) => ticket.state === "Pendientes" && ticket.idSolver === user.id
  );
  const filteredTicketsSucesfull = ticketList.filter(
    (ticket) => ticket.state === "Resueltos" && ticket.idSolver === user.id
  );
  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <div className="container-ticket-filter ">
      <div className="container-md  tickets-container mt-5">
        <div className="cardHeader row justify-content-between py-3">
          <div className="col-sm-12 text-center mt-4 text-bg-danger p-3">
            <h2 className="tickets-title-responsive">Tickets</h2>
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
          <div
            className="tab-content tickets-list d-flex justify-content-center  align-items-center bg-white"
            id="myTabContent"
          >
            <FilterTicketOpen filteredTicketsOpen={filteredTicketsOpen} />
            <FilterTicketProcess
              filteredTicketsProcess={filteredTicketsProcess}
            />
            <FilterTicketPendient
              filteredTicketsPendient={filteredTicketsPendient}
            />
            <TicketFilterSuccesfull
              filteredTicketsSucesfull={filteredTicketsSucesfull}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTickets;
