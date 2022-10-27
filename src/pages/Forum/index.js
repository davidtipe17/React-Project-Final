import { useState, useEffect } from "react";
import { searchTickets } from "../../services";
import { getUser} from "../../services";
import { CardPost } from "../../components";
import { getUserById, createUser, deleteUser } from "../../services/userServices";
import { listUsers } from "../../services/userServices";
import { listPosts, GetPostById } from "../../services/publicationServices";
import { SignIn } from "../../services/authServices"
import { createRole, listRoles, deleteRole } from "../../services/roleServices"


import "../.././css/Filtertecnicos.css";


const Forum = () => {
  const [ticketList, setTicketList] = useState([]);

  const [usersList, setUserList] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  /*PRUEBAS
  console.log("usuario por ID" , getUserById(1))
  console.log("lista de usuarios", listUsers(1,1))

  const user = {
    "username": "miguelitorapero",
    "password": "miguel"
  }

  console.log("usuario logeado", SignIn(user))

  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NjkwMTU4OSwianRpIjoiNjY5ZmI5OGQtNjk2Ni00MGI2LTlkMGItYzA0MDYyMTExNDdmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNjY2OTAxNTg5LCJleHAiOjE2NjY5ODc5ODl9.z-k-ju95At9ERc1iVsakoHifh3PGccL9FEHNM2oPWv8"

  console.log("lista de posts", listPosts(1,1,token))

  console.log("post por id", GetPostById(1, token))*/




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
   //precio maximo y minimo    
  const filteredTecnicos = usersList.filter((item) => {
    return Object.values(item.especialidades).join('').toLowerCase().includes(searchInput.toLowerCase())
    
    } )




    //filtro de precios
  //console.log(filteredTecnicos)
  
  //console.log(filteredPrecios)

  //filtro de preciostickets
  const filteredPosts = ticketList.filter((item) => {
    return item.description
    
    }

  )


  useEffect(() => {
    fetchTickets();
    fetchUsers();
  }, []);

  return (

    <div className="prueba1">
    
      
      
        
          <div >
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
                       // onChange={(e) => setMinPrice(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                
               
                
              </div>
              <div className="col-md-8 card">
                <div className="row">
                  <div className="card-header d-flex justify-content-between ">
                    <div className="card-component-firstheader d-flex justify-content-around align-items-center text-center">
                      <h5 className="">Publicaciones</h5>
                      &nbsp;&nbsp;
                      
                      &nbsp;&nbsp;
                      <div className="d-grid gap-2 d-md-block">
                        <button className="btn " type="button">
                          <i className="fa-solid fa-less-than"></i>
                        </button>
                        &nbsp;
                        <button className="btn" type="button">
                          <i className="fa-solid fa-greater-than"></i>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {
                    ticketList.map((post, index) => 
                         
                    <CardPost post={post} index={index}/>       
                       
                    )
                }


              </div>
            </div>
          </div>
          
        </div>
    
   
  );
};

export default Forum;
