import "../.././css/Filtertecnicos.css";
import imagenprofile from "../../assets/img/profile.png";
const Filtertecnicos = () => {
  return (
    <div> 
      <ul class="nav nav-pills mb-3 border border-dark" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
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
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Tickets
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="container-content">
            <div class="row d-flex flex-row justify-content-between">
              <div class="col-3 card p-3">
                <div className="row">
                  <div className="col-12">
                    <h4 class="fw-semibold"> Filters</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6 class="fw-semibold"> Tarifa </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label for="exampleFormControlInput1" class="form-label">
                      min
                    </label>
                    <div class="input-group flex-nowrap border border-black">
                      <span>$</span>
                      &nbsp;
                      <input
                        type="text"
                        placeholder="0"
                        className="border border-light btn-filter-lateral"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      .
                    </label>
                    <div class="input-group flex-nowrap">
                      <h7 className="fw-norma">to</h7>
                    </div>
                  </div>
                  <div className="col-4">
                    <label for="exampleFormControlInput1" class="form-label">
                      min
                    </label>
                    <div class="input-group flex-nowrap border border-black">
                      <span>$</span>
                      &nbsp;
                      <input
                        type="text"
                        placeholder="0"
                        className="border border-light btn-filter-lateral"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <h6 class="fw-semibold"> Skills </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 2
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h6 class="fw-semibold"> Skills </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    <label htmlFor="row">
                      <h6>Online</h6>
                    </label>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Tecnicos Online
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-8 card">
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
                      <div class="d-grid gap-2 d-md-block">
                        <button class="btn " type="button">
                          <i class="fa-solid fa-less-than"></i>
                        </button>
                        &nbsp;
                        <button class="btn" type="button">
                          <i class="fa-solid fa-greater-than"></i>
                        </button>
                      </div>
                    </div>
                    <div className="row-contenedor-mylist">
                      <button className="btn" type="button">
                        <i class="fa-solid fa-heart coloriconheart"></i>
                        &nbsp;
                        <b>My List</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center">
                      <img
                        className="card-img m-auto"
                        src={imagenprofile}
                        alt="profile"
                      />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col">
                          <div class="row mt-2">
                            <div class="col">col</div>
                            <div class="col">col</div>
                            <div class="col">col</div>
                            <div class="col">col</div>
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
                    <div className="col-3 d-flex flex-column justify-content-evenly">
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
                            <i class="fa-solid fa-heart coloriconheart "></i>
                          </div>
                          <div className="mt-3 d-flex justify-content-end">
                            <button
                              type="button"
                              class="btn btn-primary  rounded-1"
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
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div className="container-content">
            <div class="row d-flex flex-row justify-content-between">
              <div class="col-3 card p-3">
                <div className="row">
                  <div className="col-12">
                    <h4 class="fw-semibold"> Filters</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6 class="fw-semibold"> Min </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <h6 class="fw-semibold"> Max </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h6 class="fw-semibold"> Skills </h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col border border-light">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Skills"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 2
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 3
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Skill 4
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-8 card">
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
                      <div class="d-grid gap-2 d-md-block">
                        <button class="btn " type="button">
                          <i class="fa-solid fa-less-than"></i>
                        </button>
                        &nbsp;
                        <button class="btn" type="button">
                          <i class="fa-solid fa-greater-than"></i>
                        </button>
                      </div>
                    </div>
                    <div className="row-contenedor-mylist">
                      <button className="btn" type="button">
                        <i class="fa-solid fa-heart coloriconheart"></i>
                        &nbsp;
                        <b>My List</b>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col">
                          <div class="row mt-2">
                            <div class="col">col</div>
                            <div class="col">col</div>
                            <div class="col">col</div>
                            <div class="col">col</div>
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
                    <div className="col-6 d-flex flex-column justify-content-evenly">
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
                            <i class="fa-solid fa-heart coloriconheart "></i>
                          </div>
                          <div className="mt-3 d-flex justify-content-end">
                            <button
                              type="button"
                              class="btn btn-primary  rounded-1"
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
      </div>
      </div>
  );
};

export default Filtertecnicos;
