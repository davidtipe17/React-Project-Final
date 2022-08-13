const TicketFilterSuccesfull = ({filteredTicketsSucesfull}) => {
  return (
    <div
      className="tab-pane fade container m-3"
      id="ticketsResueltos"
      role="tabpanel"
      aria-labelledby="tickets-Resueltos-tab"
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
        {filteredTicketsSucesfull?.length > 0 ? (
          filteredTicketsSucesfull.map((ticket, index) => (
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
export default TicketFilterSuccesfull;