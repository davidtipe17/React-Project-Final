const FormAddExperience = ({user}) => {
  return (
    <div className=" mb-3  card-body ">
      <div className=" mb-3">
        <div className="p-2">
          <div className="row">
            <div className="col">
              <h5>{user.Title}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>{user.company}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>{user.start} - </span>
              &nbsp;
              <span>{user.end}</span>
            </div>
          </div>
          <div className="row">
            <p>{user.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormAddExperience;
