import { useState, useEffect } from "react";
// import { searchTickets } from "../../services";
// import { getUser } from "../../services";
import { CardPost } from "../../components";
import { getUserById, createUser, deleteUser, listUsers } from "../../services/userServices";
import { listPosts, getPostById, listPostsTotal } from "../../services/publicationServices";
import { SignIn } from "../../services/authServices"
// import { createRole, listRoles, deleteRole } from "../../services/roleServices"


import "../.././css/Filtertecnicos.css";


const Forum = () => {
  // const [ticketList, setTicketList] = useState([]);

  // const [usersList, setUserList] = useState([]);

  // const [searchInput, setSearchInput] = useState('');

  const [publicationlist, setPublication] = useState([]);
  // //PRUEBAS
  // console.log("usuario por ID" , getUserById(1))
  // console.log("lista de usuarios", listUsers(1,1))

  // const user = {
  //   "username": "arturoc",
  //   "password": "123456"
  // }

  // console.log("usuario logeado", SignIn(user))

  // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NjkzNzk4OCwianRpIjoiNDVjNzZkODUtNzQ1MC00YTdlLTkxMzQtNTFjYTJkZjM1MDlkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NCwibmJmIjoxNjY2OTM3OTg4LCJleHAiOjE2NjcwMjQzODh9.napauFtf8UPdzFA7A5aIG7PMY8KkZLgqKqwy5cwtGdo"

  // console.log("lista de posts total", listPostsTotal(1, 1, token))

  // console.log("post por id", getPostById(1, token))

  const fetchPublication = async () => {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NjkzNzk4OCwianRpIjoiNDVjNzZkODUtNzQ1MC00YTdlLTkxMzQtNTFjYTJkZjM1MDlkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NCwibmJmIjoxNjY2OTM3OTg4LCJleHAiOjE2NjcwMjQzODh9.napauFtf8UPdzFA7A5aIG7PMY8KkZLgqKqwy5cwtGdo"
    const data = await listPostsTotal(1, 1, token);
    setPublication(data.data);
    console.log('hola', data.data)
  };

  // const fetchTickets = async () => {
  //   const data = await searchTickets();
  //   setTicketList(data);
  //   // console.log("probando", data);

  // };

  // const fetchUsers = async () => {
  //   const data = await getUser();
  //   setUserList(data);
  //   // console.log("probando", data);

  // };

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //  }
  //precio maximo y minimo    
  // const filteredTecnicos = usersList.filter((item) => {
  //   return Object.values(item.especialidades).join('').toLowerCase().includes(searchInput.toLowerCase())

  // })




  //filtro de precios
  //console.log(filteredTecnicos)

  //console.log(filteredPrecios)

  //filtro de preciostickets
  // const filteredPosts = ticketList.filter((item) => {
  //   return item.description

  // })


  useEffect(() => {
    // fetchTickets();
    // fetchUsers();
    fetchPublication();
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
              publicationlist.length > 0 &&
              publicationlist.map((post, index) =>
                <CardPost post={post} index={index} />

              )
            }


          </div>
        </div>
      </div>

    </div>


  );
};

export default Forum;
