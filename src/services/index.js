import { config, Url_User } from "./config";

<<<<<<< HEAD

export const searchTickets = async () => {  

    try {
    const response = await fetch(config.tickets);
        const data = await response.json();
        return data;

    } catch (error) {
        return error;
    }
}

export const searchUsers = async () => {  

    try {
    const response = await fetch(config.users);
        const data = await response.json();
        return data;

    } catch (error) {
        return error;

    }
}
=======
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
>>>>>>> 77927a20611b30d11eac9334e92439c2c3b90ec4
