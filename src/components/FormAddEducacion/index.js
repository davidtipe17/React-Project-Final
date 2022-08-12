const FormAddEducacion = ({ user }) => {
  return (
    <div class=" mb-3  card-body " user={user}>
      <div class=" mb-3">
        <div class="p-2">
          <div className="row">
            <div className="col">
              <h5>{user.degree}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>{user.university}, </span>
              &nbsp;
              <span>{user.country}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>{user.start} - </span>
              &nbsp;
              <span>{user.end}</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FormAddEducacion;
