import '../../css/Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Help-Center</h4>
          </div>
          <div className="col">
            <h4>Empresa</h4>
            <ui className="list-unstyled">
              <li>Nosotros</li>
              <li>Informacion</li>
              <li>Preguntas</li>
            </ui>
          </div>
          <div className="col">
            <h4>Contactanos</h4>
            <ui className="list-unstyled">
              <li>Correo</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <p className="col-sm my-3">
            &copy;{new Date().getFullYear()} Help-Center &nbsp;| &nbsp; Todos los derechos Reservados  |
            Terminos del servicio &nbsp;|&nbsp; Privacidad
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
