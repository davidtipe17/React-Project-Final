import { Box } from "@mui/material";
import { useState, useContext } from "react";
import "../../css/FormAddTicket.css";
import { AuthContext } from "../../context";
import { createTicket } from "../../services";
const FormAddTicket = () => {

  const {user} = useContext(AuthContext);

  const [newTicket, setNewTicket] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      idCreator:user.id,
      title:data.get('title'),
      descripcion:data.get('description'),
      imagenUrl:data.get('image'),
      price:data.get('price'),
    }) 
    setNewTicket({
      title:data.get('title'),
      description:data.get('description'),
      image:data.get('image'),
      price:data.get('price'),
    }) 
  }

  const addTicket = async  () => {
    const res = await createTicket(newTicket);
    if(res){
      alert("ticket creado con exito");
    }
  }


  return (
    <Box>
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
              <form action="" onSubmit={handleSubmit}>
                <div className="m-3">
                  <label for="title" className="form-label">Elige un titulo para tu ticket</label>
                  <input type="text" className="form-control rounded-0" id="title" name="title" placeholder="" />
                </div>
                <div className="m-3">
                  <label for="description" className="form-label">Cuentanos más sobre tu proyecto</label>
                  <textarea className="form-control" id="description" name="description" rows="3"></textarea>
                </div>
                <div className="m-3">
                  <label for="image" className="form-label">
                    Inserta una imagen
                  </label>
                  <input
                    className="form-control rounded-0"
                    type="file"
                    id="image"
                    name="image"
                  />
                </div>
                <div className="m-3">
                  <label for="price" className="form-label">¿Cual sera el precio?</label>
                  <input type="text" className="form-control rounded-0" id="price" name="price" placeholder="" />
                </div>
                <button
                  onClick={addTicket}
                  type="submit"
                  className="btn btn-success rounded-0 m-3 px-4 py-3 "
                >
                  Si, Publicar Mi Solucitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default FormAddTicket;
