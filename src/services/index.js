import { config, Url_User } from "./config";

export const createTicket = async (newTicket) => {
  try {
    const response = await fetch(config, {
      method: "POST",
      body: JSON.stringify({
        idCreator: newTicket.idCreator,
        title: newTicket.title,
        imageUrl: newTicket.imageUrl,
        state: "Abierto",
        description: newTicket.description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.ok;
  } catch (error) {
    return error;
  }
};

export const searchTickets = async () => {
  try {
    const response = await fetch(config);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

//POSTS

export const createPost = async (newTicket) => {
  try {
    const response = await fetch(config, {
      method: "POST",
      body: JSON.stringify({
        title: newTicket.title,
        imagenUrl: newTicket.imagenUrl,
        State: "abierto",
        idCreator: newTicket.idUser,
        description: newTicket.description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.ok;
  } catch (error) {
    return error;
  }
};

export const searchPosts = async () => {
  try {
    const response = await fetch(config);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};



export const getPost = async () => {
  try {
    const response = await fetch(config);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};


//COMMENTS

export const createComment = async (newTicket) => {
  try {
    const response = await fetch(config, {
      method: "POST",
      body: JSON.stringify({
        title: newTicket.title,
        imagenUrl: newTicket.imagenUrl,
        State: "abierto",
        idCreator: newTicket.idUser,
        descripcion: newTicket.descripcion,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.ok;
  } catch (error) {
    return error;
  }
};

export const searchComments = async () => {
  try {
    const response = await fetch(config);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};



export const getUser = async () => {
  try {
    const response = await fetch(Url_User);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id, profesion) => {
  try {
    const response = await fetch(Url_User + "/" + id, {
      method: "PUT",
      body: JSON.stringify({ profesion }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.clone().json();
    return data;
  } catch (error) {
    return error;
  }
};

export const updateUserProfile = async (id, profile) => {
  try {
    const response = await fetch(Url_User + "/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: profile.nombre,
        apellido: profile.apellido,
        direccion: profile.direccion,
        contrasena: profile.confirmpassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.clone().json();
    return data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (newUser) => {
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
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.ok;
  } catch (error) {
    return error;
  }
};
