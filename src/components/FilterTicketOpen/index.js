const FilterTicketOpen = ({ filteredTicketsOpen}) => {
  return (
    <div
      className="tab-pane fade show active container m-3 "
      id="ticketsAbiertos"
      role="tabpanel"
      aria-labelledby="tickets-Abiertos-tab"
    >
      <table className="table  ">
        <thead className="border border-dark text-center text-light bg-dark ">
          <tr className="col-12 ">
            <th scope="col-12 ">ID</th>
            <th scope="col-12">Asunto</th>
            <th scope="col-12">Descripcion</th>
            <th scope="col-12">Estado</th>
          </tr>
        </thead>
        {filteredTicketsOpen?.length > 0 ? (
          filteredTicketsOpen.map((ticket, index) => (
            <tbody className="text-center">
              <tr className="border">
                <th>{ticket.id}</th>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.state}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody className="container text-center">
            <tr>
              <td colspan="4">
                <h3>Sin Tickets</h3>
                <p>
                  Millones de talentosos Tecnicos estan listos para ayudarte a
                  hacer cosas increibles{" "}
                </p>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default FilterTicketOpen;
