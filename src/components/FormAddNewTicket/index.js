
const FormAddNewTicket = ({handleSubmit, addTicket}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
                <label for="title" className="form-label">Elige un titulo para tu ticket</label>
                <input type="text" className="form-control rounded-0" id="title" name="title" placeholder="" />
            </div>
            <div className="m-3">
                <label for="description" className="form-label">Cuentanos más sobre tu proyecto</label>
                <textarea className="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div className="m-3">
                <label for="image" className="form-label">
                    Inserta una imagen
                </label>
                <input
                    className="form-control rounded-0"
                    type="file"
                    id="image"
                    name="image"
                />
            </div>
            <div className="m-3">
                <label for="price" className="form-label">¿Cual sera el precio?</label>
                <input type="text" className="form-control rounded-0" id="price" name="price" placeholder="" />
            </div>
            <button
                onClick={addTicket}
                type="submit"
                className="btn btn-success rounded-0 m-3 px-4 py-3 "
            >
                Si, Publicar Mi Solucitud
            </button>
        </form>
    )
}
export default FormAddNewTicket;