
const FormAddNewPost = ({handleSubmit, handleInputChange}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
                <label for="title" className="form-label">Título</label>
                <input 
                    type="text" 
                    className="form-control rounded-0" 
                    id="title" 
                    name="title" 
                    onChange={handleInputChange}
                    />
            </div>
            <div className="row m-3">
                <label for="description" className="form-label">Descripción</label>
                <textarea 
                    className="form-control" 
                    id="description" 
                    name="description" 
                    rows="3"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="row m-3">
                <label for="image" className="form-label">
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
            <div className="row m-3">
                <button
                type="submit"
                className="btn btn-success rounded-0 mt-3 ">
                Publicar
               </button>
               
            </div>
    
            
        </form>
    )
}
export default FormAddNewPost;