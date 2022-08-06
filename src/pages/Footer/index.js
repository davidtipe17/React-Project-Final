import '../../css/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row p-1 text-white">
            <div className="col-3">
              <img src="" alt="logo" />
            </div>
            <div className="col-3 pt-4">
              <p className="fw-bold">Help-Center</p>
              <div>
                <a href="#">Projects</a>
              </div>
              <div>
                <a href="#">Market Place</a>
              </div>
              <div>
                <a href="#"></a>
              </div>
            </div>
            <div className="col-3 pt-4">
              <p className="fw-bold">About us</p>
              <div>
                <a href="#">Company</a>
              </div>
              <div>
                <a href="#">Terms y Conditions</a>
              </div>
              <div>
                <a href="#">Privacy policy</a>
              </div>
            </div>
            <div className="col-3 pt-4">
              <p className="fw-bold">Contact us</p>
              <div className="social-media-list">
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>TODOS LOS DERECHOS RESERVADOS © 2022</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
