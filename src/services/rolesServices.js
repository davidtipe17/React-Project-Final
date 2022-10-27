import { API_URL } from "@lib/Enviroments";

export const listRoles = async (list) => {
    const response = await fetch(`${API_URL}/roles`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    return { data };
  };


   export const createRole = async (role) => {
    const response = await fetch(`${API_URL}/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(role),
      
    });
    const data = await response.json();
    return data;
  };


  export const GetRoleById = async (id) => {
    const response = await fetch(`${API_URL}/roles/${id}`);
    const data = await response.json();
    return data;
  };

  export const DeleteRole = async (id) => {
    const response = await fetch(`${API_URL}/roles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


  export const UpdateRole = async (role) => {
    const response = await fetch(`${API_URL}/roles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(role),
    });
    const data = await response.json();
    return data ;
  };
  