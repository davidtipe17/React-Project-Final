import { API_URL } from "@lib/Enviroments";

export const listUsers = async (list) => {
    const response = await fetch(`${API_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    return { data };
  };


   export const createUser = async (user) => {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      
    });
    const data = await response.json();
    return data;
  };


  export const GetUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();
    return data;
  };

  export const DeleteUsers = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


  export const UpdateUser = async (user) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data ;
  };
  