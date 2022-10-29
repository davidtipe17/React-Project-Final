import imagenprofile from "../../assets/img/profile.png";
import "../.././css/Filtertecnicos.css";

const CardReply = () => {
  return (
    <div className="card-body border m-3">
      <div className="row">
        <div className="row mt-4 d-flex justify-content-between">
          <div className="col-md-2 d-flex flex-column justify-content-center">
            <img
              className="card-img m-auto"
              src={imagenprofile}
              alt="profile"
            />

            <div className="row mt-2">
              <span>
                <i class="fa fa-user"></i> User
              </span>
            </div>
          </div>

          <div className="col-md-10 justify-content-between">
            <div className="row mt-4">
              <div className="col">
                <p>prueba</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 d-flex justify-content-between">
          <div className="col-md-6 mt-6 d-flex align-items-end">
            <strong>Done at:</strong> prueba{" "}
          </div>
          <div className="col-md-3 d-flex justify-content-end"></div>
        </div>
      </div>
    </div>
  );
};

const CardComment = ({ post, index }) => {
  return (
    <div key={index} post={post} className="card-body border m-3">
      <div className="row">
        <div className="row mt-4 d-flex justify-content-between">
          <div className="col-md-2 d-flex flex-column justify-content-center">
            <img
              className="card-img m-auto"
              src={imagenprofile}
              alt="profile"
            />

            <div className="row mt-2">
              <span><i class="fa fa-user"></i> User</span>
            </div>


          </div>

          <div className="col-md-10 justify-content-between">
            <div className="row mt-4">
              <div className="col">
                <p>
                  {post.commentary_publication.message}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-2 d-flex justify-content-between">

          <div className="col-md-6 mt-6 d-flex align-items-end"><strong>Done at:</strong> create at</div>
          <div className="col-md-3 d-flex justify-content-end">


            <button type="button" className="btn-block btn-primary  rounded-1 mt-2">
              Responder
            </button>


          </div>

        </div>


      </div>
    </div>
  )
}



export default CardComment;
