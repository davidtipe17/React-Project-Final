import { useState, useEffect } from "react";
import {searchTickets} from "../../services";

import "../.././css/Filtertecnicos.css";
import imagenprofile from "../../assets/img/profile.png";

const FilterTecnicos = () => {
  const [ticketList, setTicketList] = useState([]);
  console.log("tickets", ticketList);
  const fetchTickets = async () => {
  const data = await searchTickets();

    setTicketList(data);
    console.log("probando", data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <div>
      <div className="containerPrincipalFilter"></div>
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
          <div className="container-content">
            <div className="row d-flex flex-row justify-content-between">
              <div className="col-md-3 card p-3 mb-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="fw-semibold"> Filters</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6 className="fw-semibold"> Tarifa </h6>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <h6 className="fw-semibold"> Skills </h6>
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
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 2
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    <label htmlFor="row">
                      <h6>Online</h6>
                    </label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Tecnicos Online
                      </label>
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
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-center">
                      <img
                        className="card-img m-auto"
                        src={imagenprofile}
                        alt="profile"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col">
                          <div className="row mt-2">
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="col">col</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Estrellas</div>
                        <div className="col">Banderas</div>
                        <div className="col">Estrellas</div>
                        <div className="col">Banderas</div>
                      </div>
                      <div className="row">
                        <div className="col">Software Engineer</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellat magni laudantium aliquid ut nulla.
                            Quaerat, velit iste sequi numquam ut quam veniam ab
                            quasi unde consectetur optio veritatis, aliquam
                            ipsam?
                          </p>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col">Especialidad</div>
                        <div className="col">Especialidad</div>
                        <div className="col">Especialidad</div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-evenly">
                      <div className="row mt-3">
                        <div className="col d-flex justify-content-end">
                          <h6>$80 USD</h6>
                        </div>
                      </div>
                      <div className="row mt-3 ">
                        <div className="col d-flex justify-content-end">
                          <span>Por hora</span>
                        </div>
                      </div>
                      <div className="row mt-3 ">
                        <div className="col d-flex flex-column">
                          <div className=" d-flex justify-content-end">
                            <i className="fa-solid fa-heart coloriconheart "></i>
                          </div>
                          <div className="mt-3 d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-primary  rounded-1"
                            >
                              Primary
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          <div className="container-content">
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
                        type="text"
                        className="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
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
                        type="text"
                        className="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="fw-semibold"> Skills </h6>
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
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 2
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 3
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Skill 4
                      </label>
                    </div>
                  </div>
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
                {ticketList.length > 0 &&
                  ticketList.map((user, index) => (
                    <div key={index} user={user} className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="row d-flex justify-content-between">
                            <div className="col-5">
                              <h5>{user.title}</h5>
                              <span>Bubget $10 - 30 USD</span>
                            </div>
                            <div className="col-4">
                              <h5>{user.price} USD</h5>
                              <span>average bid</span>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col">
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Repellat magni laudantium
                                aliquid ut nulla. Quaerat, velit iste sequi
                                numquam ut quam veniam ab quasi unde consectetur
                                optio veritatis, aliquam ipsam?
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className=" d-flex flex-row justify-center-start">
                                <li>PHP</li>
                                <li className="ms-4">JavaScript</li>
                                <li className="ms-4">WordPress</li>
                                <li className="ms-4">Css</li>
                                <li className="ms-4">Html</li>
                              </ul>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-between">
                            <div className="col-md-3">Cantidad de Mensajes</div>
                            <div className="col-md-3">{user.createdAt}</div>
                            <div className="col-md-3 text-bg-success">
                              <span>{user.state}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTecnicos;
