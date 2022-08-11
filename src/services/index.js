import { config, Url_User } from "./config";

 const createTicket = async (newTicket) => {
  try {
    const response = await fetch(config ,{
      method: "POST",
      body: JSON.stringify({
        title: newTicket.title,
        imagenUrl: newTicket.imagenUrl,
        State:"abierto",
        idCreator: newTicket.idUser,
        descripcion: newTicket.descripcion,
      }),
      headers:{
        "Content-type": "application/json",
    },
    });
      return response.ok;
  } catch (error) {
    return error;
  }
}

 const searchTickets = async () => {
  try {
    const response = await fetch(config);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

 const getUser = async () => {
  try {
    const response = await fetch(Url_User);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
 const updateUser = async (id, profesion) => {
    
  try {
      const response = await fetch(Url_User + "/" + id , {
          method: "PUT",
          body: JSON.stringify({
            profesion: profesion,
          }),
          headers: {
              "Content-type": "application/json",
          },
      });
      console.log(response)
      return response.ok;
  } catch (error) {
      return error;
  }
};

 const createUser = async (newUser) => {
    try {
        const response = await fetch(Url_User, {
            method: "POST",
            body: JSON.stringify({
                name: newUser.name,
                apellido: newUser.apellido,
                celular: newUser.celular,
                profesion: newUser.profesion,
                correo: newUser.correo,
                contrasena: newUser.contrasena,
            }),
            headers:{
                "Content-type": "application/json",
            },
        });
        return response.ok;  
    } catch (error) {
        return error
    }
}

const Services = {
  updateUser,
  createTicket,
  searchTickets,
  createUser,
}

export default Services;