import { useState, useEffect, useContext } from "react";
import { searchTickets } from "../../services";
import { getUser} from "../../services";


import { CardComment, CardPost } from "../../components";
import { FormAddNewComment } from "../../components";

import { Box } from "@mui/material";
import { AuthContext } from "../../context";
import { createComment } from "../../services";


import "../.././css/Filtertecnicos.css";


const Thread = () => {
  const [ticketList, setTicketList] = useState([]);

  const [usersList, setUserList] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  const [ticket, setTicket] = useState('');

  //const [maxprice, setMaxPrice] = useState('2000');

  const { user } = useContext(AuthContext);

  const [newTicket, setNewTicket] = useState({
    idCreator:user.id,
    title: "",
    descripcion:"",
    imagenUrl:"",
    price:0
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
    addComment();
  }

  const addComment = async () => {
    const res = await createComment(newTicket);
    if (res) {
      alert("Comentario publicado con exito");
    }
  }



  const fetchTickets = async () => {
    const data = await searchTickets();
    setTicketList(data);
    console.log("probando", data);

  };

  const fetchUsers = async () => {
    const data = await getUser();
    setUserList(data);
    console.log("probando", data);
    
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
   }

   const filteredPosts = ticketList.filter((item) => {
    return item.id == 2
    
    }
   //precio maximo y minimo    
  //const filteredTecnicos = usersList.filter((item) => {
    //return Object.values(item.especialidades).join('').toLowerCase().includes(searchInput.toLowerCase())
    
    //} )




    //filtro de precios
  //console.log(filteredTecnicos)
  
  //console.log(filteredPrecios)

  //filtro de preciostickets

  )

  function createStars(number){
    var elements = [];
    for(let i =0; i < Math.round(number*0.05); i++){
        elements.push( <i className="fa-solid fa-star"></i>);
    }
    return elements;
}

  useEffect(() => {
    fetchTickets();
    fetchUsers();
  }, []);

  return (

    <div className="prueba1">
      
          <div>
            <div className="row d-flex flex-row justify-content-between">
              <div className="col-md-3 card p-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="fw-semibold"> Filters</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6 className="fw-semibold"> </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                       
                        aria-label="Username"
                        //onChange={(e) => setMinPrice(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                
               
                
              </div>
              <div className="col-md-8">
                    
              <div className="row-md-8 card mb-4">
              {
                    filteredPosts.map((post, index) => 
                         
                    <CardPost post={post} index={index}/>       
                       
                    )
                }


              </div>

              <div className="row-md-8 card mb-4 p-5">
                <h4>Respuestas</h4>
                {
                    ticketList.map((post, index) => 
                         
                    <CardComment post={post} index={index}/>       
                       
                    )
                }


              </div>

              <div className="row card mb-4 p-5 d-flex justify-content-center">
              <div className="card FormAddTicket-card-container rounded-0">
              <FormAddNewComment handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
              </div>

              </div>


              </div>

             

            </div>
          </div>
        
      </div>
   
  );
};

export default Thread;
