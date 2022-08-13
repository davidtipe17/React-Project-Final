import { useState, useContext } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../context";
import { createTicket } from "../../services";
import { FormAddNewTicket } from "../../components";
import "../../css/FormAddTicket.css";
const FormAddTicket = () => {
  const { user } = useContext(AuthContext);

  const [newTicket, setNewTicket] = useState({
    idCreator: user.id,
    title: "",
    descripcion: "",
    imagenUrl: "",
    price: 0,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTicket({
      ...newTicket,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTicket();
  };
  const addTicket = async () => {
    const res = await createTicket(newTicket);
    if (res) {
      alert("ticket creado con exito");
    }
  };
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
              <FormAddNewTicket
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default FormAddTicket;
