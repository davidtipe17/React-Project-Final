import { Box } from "@mui/material";
import { useState, useContext } from "react";
import "../../css/FormAddTicket.css";
import { AuthContext } from "../../context";
import { createTicket } from "../../services";
import { FormAddNewTicket } from "../../components";
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
              <FormAddNewTicket handleSubmit={handleSubmit} addTicket={addTicket} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default FormAddTicket;
  