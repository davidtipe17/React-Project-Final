import "../.././css/Questionandanswer.css";

const QuestionAndAnswer = () => {
  return (
    <div className="container-content-principal">
      <div className="row d-flex ">
        <div className=" titlesupport-client ">
          <h2>Cliente Help Center</h2>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptate praesentium, soluta, cupiditate autem quam a labore est
            aspernatur eos eveniet. Unde quas, nesciunt corporis minus
            temporibus dolor quod fuga.
          </p>
        </div>
      </div>
      <div className="supportNav-tab">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
              General
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
              aria-selected="false"
            >
              Payments
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h6> Primeros pasos en Freelancer.com</h6>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body accordion-body-one">
                  <h3>Getting started on Support.com</h3>
                  <p>
                    Support.com allows clients and freelancers to work together
                    on both online and offline projects over a wide range of
                    categories through projects and contests.
                  </p>
                  &nbsp;
                  <p>Signing up is easy.</p>
                  <ul>
                    <li className="list-style-none">
                      1. Click <a href="Sign Up">Sign Up</a> on the
                      Freelancer.com homepage. Registration is free.
                    </li>
                    <li className="list-style-none">
                      {" "}
                      2. You can choose to sign up via Facebook or via email.
                    </li>
                  </ul>
                  <font>
                    By signing up, you agree to our{" "}
                    <a href="#">Terms and Conditions</a> and{" "}
                    <a href="#">Privacy Policy.</a>
                  </font>
                  <ul className="mt-3">
                    <li className="list-style-none">
                      {" "}
                      3. Luego se le pedirá que proporcione un nombre de
                      usuario. Tenga en cuenta que una vez elegido, no se puede
                      cambiar un nombre de usuario . Haga clic en Siguiente una
                      vez hecho.
                    </li>
                  </ul>
                  <font>Usernames should:</font>
                  <ul>
                    <li className="list-style-none2">
                      be alphanumeric (contains letters and/or numbers),
                    </li>
                    <li className="list-style-none2">
                      start with a letter, and
                    </li>
                    <li className="list-style-none2">
                      have 16 characters at most.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
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
          tabindex="0"
        >
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button>
            <h6 className="mt-2 me-2 ms-2">Load More</h6>
          </button>
        </div>
      </div>
      <div className=" row  mt-5 mb-5 ">
        <div className="col-12 card responsive-support-client-icon-description">
          <div className="row justify-content-center ">
            <div className="col-sm-3  mt-5 mb-5  usersupport-icon me-2 text-center">
              <i className="fa-solid fa-user-gear "></i>
            </div>
            <div className="col-sm-4  mt-5 mb-5  text-center">
              <h3>Contac Us</h3>
              <p>
                Still have questions? Our awesome Customer Support Team is ready
                to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
