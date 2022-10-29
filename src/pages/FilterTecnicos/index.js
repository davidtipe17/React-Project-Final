import { useState, useEffect } from "react";
import { searchTickets } from "../../services";
import { getUser} from "../../services";
import { CardTecnico } from "../../components";
import imagenprofile from "../../assets/img/profile.png";
import { CardTickets } from "../../components";

import "../.././css/Filtertecnicos.css";


const FilterTecnicos = () => {
  const [ticketList, setTicketList] = useState([]);

  const [usersList, setUserList] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  const [minprice, setMinPrice] = useState('');

  const [maxprice, setMaxPrice] = useState('2000');



  const fetchTickets = async () => {
    const data = await searchTickets();
    setTicketList(data);
    // console.log("probando", data);

  };

  const fetchUsers = async () => {
    const data = await getUser();
    setUserList(data);
    // console.log("probando", data);
    
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
  const filteredPreciosT = ticketList.filter((item) => {
    return item.price > minprice && item.price < maxprice
    
    }

  )

  function createStars(number){
    var elements = [];
    for(let i =0; i < Math.round(number*0.05); i++){
        elements.push( <i class="fa-solid fa-star"></i>);
    }
    return elements;
}

  useEffect(() => {
    fetchTickets();
    fetchUsers();
  }, []);

  return (

    <div className="prueba1">
      <ul
        className="nav nav-pills mb-3 border border-dark"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Tecnicos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
          >
            Tickets
          </button>
        </li>
      </ul>
      
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        >
          <div >
            <div className="row d-flex flex-row justify-content-between">
              <div className="col-md-3 card p-3 mb-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="fw-semibold"> Filters</h4>
                  </div>
                </div>
               
                <div className="row mt-2">
                  <div className="col-12">
                    <h6 className="fw-semibold"> Skillss </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Skills"
                        onChange={(e) => searchItems(e.target.value)}
            
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 card mb-3">
                <div className="row">
                  <div className="card-header d-flex justify-content-between ">
                    <div className="card-component-firstheader d-flex justify-content-around align-items-center text-center">
                      <h5 className="">Top results</h5>
                      &nbsp;&nbsp;
                      <span>
                        Showing{" "}
                        <span className="paginacionderesultados"> 1-20</span> of{" "}
                        <span className="contadorderesultados">29964 </span>{" "}
                        results
                      </span>
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
                    <div className="row-contenedor-mylist btn-responsive">
                      <button className="btn" type="button">
                        <i className="fa-solid fa-heart coloriconheart"></i>
                        &nbsp;
                        <b>My List</b>
                      </button>
                    </div>
                  </div>
                </div>

                {filteredTecnicos.length > 0 ? (
                    filteredTecnicos.map((user) => 
                      <CardTecnico user={user}/> 
                    )
                ) : (
                    usersList.map((user) => 
                    <CardTecnico user={user}/> 
                    )
                )}

                


              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
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
                    <h6 className="fw-semibold"> Min </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        onChange={(e) => setMinPrice(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <h6 className="fw-semibold"> Max </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      <input
                        type="num,b"
                        className="form-control"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                </div>
              </div>
              <div className="col-md-8 card">
                <div className="row">
                  <div className="card-header d-flex justify-content-between ">
                    <div className="card-component-firstheader d-flex justify-content-around align-items-center text-center">
                      <h5 className="">Top results</h5>
                      &nbsp;&nbsp;
                      <span>
                        Showing{" "}
                        <span className="paginacionderesultados"> 1-20</span> of{" "}
                        <span className="contadorderesultados">29964 </span>{" "}
                        results
                      </span>
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
                    <div className="row-contenedor-mylist">
                      <button className="btn" type="button">
                        <i className="fa-solid fa-heart coloriconheart"></i>
                        &nbsp;
                        <b>My List</b>
                      </button>
                    </div>
                  </div>
                </div>
                {filteredPreciosT.length > 0 ? (
                    filteredPreciosT.map((user, index) => 
                    <CardTickets user={user} index={index}/> 
                    )
                ) : (
                    ticketList.map((user, index) => 
                         
                    <CardTickets user={user} index={index}/>          
                    )
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTecnicos;