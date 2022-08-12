import "../.././css/Filtertecnicos.css";

const CardTickets = ({ user, index }) => {
  return (
    <div key={index} user={user} className="card-body border-bottom">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between">
            <div className="col-5">
              <h5>{user.title}</h5>
              <span>Bubget $10 - 30 USD</span>
            </div>
            <div className="col-4">
              <h5>{user.price} USD</h5>
              <span>average bid</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat magni laudantium aliquid ut nulla. Quaerat, velit iste
                sequi numquam ut quam veniam ab quasi unde consectetur optio
                veritatis, aliquam ipsam?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className=" d-flex flex-row justify-center-start">
                <li>PHP</li>
                <li className="ms-4">JavaScript</li>
                <li className="ms-4">WordPress</li>
                <li className="ms-4">Css</li>
                <li className="ms-4">Html</li>
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-md-3">Cantidad de Mensajes</div>
            <div className="col-md-3">{user.createdAt}</div>
            <div className="col-md-3 text-bg-success">
              <span>{user.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTickets;
