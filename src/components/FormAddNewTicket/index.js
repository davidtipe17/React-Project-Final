
const FormAddNewTicket = ({handleSubmit, handleInputChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="m-3">
                <label  className="form-label">Elige un titulo para tu ticket</label>
                <input 
                    type="text" 
                    className="form-control rounded-0" 
                    id="title" 
                    name="title" 
                    onChange={handleInputChange}
                    />
            </div>
            <div className="m-3">
                <label className="form-label">Cuentanos más sobre tu proyecto</label>
                <textarea 
                    className="form-control" 
                    id="description" 
                    name="descripcion" 
                    rows="3"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="m-3">
                <label className="form-label">
                    Inserta una imagen
                </label>
                <input
                    className="form-control rounded-0"
                    type="file"
                    id="image"
                    name="imagenUrl"
                    onChange={handleInputChange}
                />
            </div>
            <div className="m-3">
                <label className="form-label">¿Cual sera el precio?</label>
                <input 
                    type="text" 
                    className="form-control rounded-0" 
                    id="price" 
                    name="price"
                    onChange={handleInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-success rounded-0 m-3 px-4 py-3 "
            >
                Si, Publicar Mi Solucitud
            </button>
        </form>
    )
}
export default FormAddNewTicket;