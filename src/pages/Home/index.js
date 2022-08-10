import slide1 from "../../assets/images/slide1.jpeg";
import slide2 from "../../assets/images/slide2.jpeg";
import slide3 from "../../assets/images/slide3.jpeg";
import slide4 from "../../assets/images/slide4.jpeg";
import slide5 from "../../assets/images/slide5.jpeg";
import "../../css/home.css";

const Home = () => {


  return (
    <div>
        
      <header className="home">
        {/* carousel */}
        <div className="carousel">
          <div
            id="carouselHome"
            className="carousel carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src={slide1} className="d-block  w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={slide2} className="d-block  w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={slide3} className="d-block  w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src={slide4} className="d-block  w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src={slide5} className="d-block  w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>

      {/* info */}
      <main className="mt-5">
        <section className="mb-4">
          <div className=" d-flex flex-column align-items-center">
            <h2 className="info-title mb-4">Tipos de Soporte Tecnico</h2>
            <div className="row info mt-2">
              <div className="col-xs-12 col-md-6 mb-3">
                <div className="icon">
                  <i className="fa-regular fa-file-lines"></i>
                </div>
                <h4>¿Qué es Diagnóstico?</h4>
                <p>
                  Sistema de evaluación y/o revisión, mediante el cual se
                  determinan las necesidades de mantenimiento o reparación de un
                  equipo, comparando sus párametros de funcionamiento con los
                  establecidos por los fabricantes.
                </p>
              </div>
              <div className="col-xs-12 col-md-6 mb-3">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h4>¿Qué es informe Técnico?</h4>
                <p>
                  Es una explicación detallada por escrito, de las
                  circunstancias observadas en el diagnóstico del equipo, con
                  expecificaciones detalladas que certifiquen lo dicho por el
                  área técnica.
                </p>
              </div>
              <div className="col-xs-12 col-md-6 mb-3">
                <div className="icon">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <h4>¿Qué es Mantenimiento Preventivo?</h4>
                <p>
                  Son actividades técnicas que se realizan de manera anticipado
                  con el fin de prevenir el surgimiento de averías en los
                  artefactos, equipos electronicos, etc., estás actividades
                  incluyen repuestos y/o accesorios que se desgastan.
                </p>
              </div>
              <div className="col-xs-12 col-md-6 mb-3">
                <div className="icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h4>¿Qué es Mantenimiento Correctivo?</h4>
                <p>
                  Se denomina aquel servicio que como principal finalidad es
                  corregir los fallos o defectos que se presentan en equipos y
                  maquinarias, que no se encuentran enlistados en los servicios
                  preventivos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bar-suscribe">
          <div className="container d-xs-block d-md-flex py-5">
            <span>
              Suscribete a nuestro Boletín de Noticias. Recibe noticias e
              información relacionadas con el mundo del Soporte
            </span>
            <div className="input-group mt-2 mt-md-0 mb-3 suscribe-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Escribe tu correo"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-dark" type="button" id="button-addon2">
                Enviar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
