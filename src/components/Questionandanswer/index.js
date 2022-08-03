import "../.././css/Questionandanswer.css";

const QuestionAndAnswer = () => {
  return (
    <div className="container-content-principal">
      <div className="row d-flex ">
        <div className="col-8 d-flex justify-content-start">
          <h2>Cliente Help Center</h2>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active rounded-5"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link rounded-5"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
          </ul>
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
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
              General
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
              Payments
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body accordion-body-one">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
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
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
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
      <div className="row d-flex justify-content-center  mt-3 ">
        <div className="col-5 card justify-content-center text-center hover-button-contactuse">
          <div className="row justify-content-center  card-body mt-5 mb-5">
            <div className="col-3 usersupport-icon me-2 card-body">
              <i class="fa-solid fa-user-gear"></i>
            </div>
            <div className="col-6  d-flex flex-column card-body text-center justify-content-center ">
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
