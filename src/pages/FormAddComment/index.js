import imagenprofile from "../../assets/img/profile.png";
import "../.././css/Filtertecnicos.css";
import { Outlet, Navigate, useNavigate } from "react-router-dom";


const FormAddComment = ({handleSubmit, handleInputChange}) => {
  return (
      <form action="" onSubmit={handleSubmit}>
          <div className="row m-3">
              <label for="description" className="form-label">Ingrese su comentario</label>
              <textarea 
                  className="form-control" 
                  id="description" 
                  name="descripcion" 
                  rows="3"
                  onChange={handleInputChange}
              ></textarea>
          </div>
          <div className="row m-3">
              <label for="image" className="form-label">
                  Inserta una imagen
              </label>
              <input
                  className="form-control rounded-0"
                  type="file"
                  id="image"
                  name="imagenUrl"
                  onChange={handleInputChange}
              />
          </div>
          <div className="row m-3">
          <button
              type="submit"
              className="btn btn-success rounded-0 mt-3">
              Publicar
          </button>
          </div>
  
          
      </form>
  )
}
export default FormAddComment;