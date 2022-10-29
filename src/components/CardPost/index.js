import imagenprofile from "../../assets/img/profile.png";
import "../.././css/Filtertecnicos.css";
import { useNavigate } from "react-router-dom"

const CardPost = ({ post, index }) => {

  const navigate = useNavigate()

  const redirect = () => {
    navigate(`/thread/${post.id}`)
  }
  return (
    <div key={index} post={post} className="card-body border m-3">
      <div className="row">

        <div className="row mt-4 d-flex justify-content-between">


          <div className="col-md-2 d-flex flex-column justify-content-center">
            <img className="card-img m-auto" src={imagenprofile} alt="profile" />

            <div className="row mt-2">
              <span><i class="fa fa-user"></i> {post.users.email}</span>
            </div>


          </div>

          <div className="col-md-8 justify-content-between">
            <div className="row-5">
              <h5>{post.title}</h5>

            </div>
            <div className="row mt-4">
              <div className="col">
                <p>
                  {post.description}
                </p>
              </div>
            </div>
          </div>

          <div className="col-2 ">

            <div className="row">

              <div className="row">{'33 respuestas'}</div>
              <div className="row">{'100 vistas'}</div>

            </div>

          </div>
        </div>

        <div className="row mt-2 d-flex justify-content-between">

          <div className="col-md-6 mt-6 d-flex align-items-end"><strong>Done at:</strong> {' ' + post.createdAt}</div>
          <div className="col-md-3 d-flex justify-content-end">

            <button type="button" className="btn btn-primary  rounded-1 mt-2" onClick={redirect}>
              Responder
            </button>


          </div>

        </div>


      </div>
    </div>
  )
}



export default CardPost;