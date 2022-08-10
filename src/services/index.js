import { config, Url_User } from "./config";

export const searchTickets = async () => {
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

export const createUser = async (newUser) => {
    try {
        const response =await fetch(Url_User, {
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