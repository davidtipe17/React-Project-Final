import iconscheckoutpagoAE from "../../assets/img2/amex.svg";
import iconscheckoutpagojcb from "../../assets/img2/jcb.svg";
import iconscheckoutpagomastercard from "../../assets/img2/mastercard.svg";
import iconscheckoutpagovisa from "../../assets/img2/visa.svg";
import "../.././css/checkoutpayment.css";

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Checkoutpago = () => {
  return (
    <div>
      <div className="container-content ">
        <div className="row justify-content-between">
          {/* FIRST COLUMN */}
          <div className="col-md-7 ">
            {/* FIRST MODULO FOR THE FIRST COLUMN */}
            <div className="row card mt-5 ">
              <div class="col-12">
                <div className="row">
                  <div class="d-flex mb-3 card-header">
                    <div class="p-2">
                      <h5>Add new payment method</h5>
                    </div>
                  </div>
                </div>
                <div class="mb-3 card-body ">
                  <div class="row">
                    <div class="col">
                      <div class="mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Debit or credit card
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          All major cards accepted
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Card number:
                        </label>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Expiry date:
                        </label>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder="MM / YY"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Cardholder name:
                        </label>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-4">
                        <div className=" d-flex justify-content-between">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            CVC/CVV:
                          </label>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            <i class="fa-solid fa-circle-info p-1"></i>
                          </label>
                        </div>
                        <input
                          type="email"
                          class="form-control border-success"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul className="d-flex flex-row justify-content-start p-0 list-group-icon-payment-inferior">
                        <li>
                          <img src={iconscheckoutpagoAE} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagojcb} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagomastercard} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagovisa} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIRST MODULO FOR THE FIRST COLUMN */}
            {/* SECOND MODULO FOR THE FIRST COLUMN */}
            <div className="row card">
              <div class="col-12">
                <div class="mb-3 card-body mt-4 ">
                  <div class="row d-flex">
                    <div class="col d-flex justify-content-start">
                      <div class="mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-end">
                      <div class="mb-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          <i class="fa-brands fa-paypal"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>





                </div>
              </div>
            </div>

            {/* SECOND MODULO FOR THE FIRST COLUMN */}
          </div>
          {/* SECOND COLUMN */}
          <div className="col-4 ">
            <div className="row card mt-5 mb-5">
              <div class="col-12  mb-1">
                <div className="row">
                  <div class="d-flex mb-3 card-header ">
                    <div class="p-2">
                      <b>Select amount</b>
                    </div>
                    <div class="ms-auto p-2">
                      <b> (GBP) </b>
                    </div>
                  </div>
                </div>
                <div class="mb-3 card-body p-0 ">
                  <div class="row p-2">
                    <div class="col">
                      <div class="mb-4">
                        <div> Currency </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      <div class="mb-4">
                        <div> Currency </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      <div className=" d-flex justify-content-start">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Processing fee:
                        </label>
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          <i class="fa-solid fa-circle-info p-1"></i>
                        </label>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-end">
                      <div class="mb-2">
                        <span>$1,000.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      <div className=" d-flex justify-content-start">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Processing fee:
                        </label>
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          <i class="fa-solid fa-circle-info p-1"></i>
                        </label>
                      </div>
                    </div>
                    <div class="col d-flex justify-content-end">
                      <div class="mb-2">
                        <span>$1,000.00</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row p-2">
                    <div class="col">
                      <div className=" d-flex justify-content-start">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Processing fee:
                        </label>
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          <i class="fa-solid fa-circle-info p-1"></i>
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-2 d-flex justify-content-end">
                        <span>$1,000.00</span>
                      </div>
                    </div>
                  </div>

                  <div class="p-2 d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ width: "450px" }}
                    >
                      Large button
                    </button>
                  </div>

                  <div class="row p-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, ullam, voluptas mollitia accusantium neque
                      sequi tenetur, consequatur quos omnis excepturi
                      reprehenderit deleniti vero. Non quasi sit voluptates, cum
                      aut dolorum?
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul className="d-flex flex-row justify-content-around p-0 list-group-icon-payment-inferior">
                        <li>
                          <img src={iconscheckoutpagoAE} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagojcb} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagomastercard} alt="" />
                        </li>
                        <li>
                          <img src={iconscheckoutpagovisa} alt="" />
                        </li>
                      </ul>
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
export default Checkoutpago;
