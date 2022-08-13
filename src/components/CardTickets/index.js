import "../.././css/Filtertecnicos.css";

const CardTickets = ({ user, index }) => {
  return (
    <div key={index} user={user} className="card-body border-bottom">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between">
            <div className="col-5">
              <h5>{user.title}</h5>
            </div>
            <div className="col-4">
              <h5>{user.price} USD</h5>
              <span>average bid</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p>{user.description}</p>
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <strong>Done at:</strong> {user.createdAt}
            </div>
            <div className="col-md-3 text-bg-success">
              <span>{user.state}</span>
            </div>

            <button type="button" className="btn btn-primary  rounded-1 mt-2">
              Add Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTickets;
