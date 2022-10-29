import { API_URL } from "../lib/Enviroments";

export const listRoles = async () => {
  const response = await fetch(`${API_URL}/roles/`);
  const data = await response.json();
  return { data };
};

export const createRole = async (role) => {
 
  const response = await fetch(`${API_URL}/roles/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(role),
    
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};


export const getRoleById = async (id) => {
  const response = await fetch(`${API_URL}/roles/${id}`);
  const data = await response.json();
  return data;
};


export const deleteRole = async (id) => {
  const response = await fetch(`${API_URL}/roles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};


export const updateRole = async (role, id) => {

  const response = await fetch(`${API_URL}/roles/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(role),
    
  });
  const data = await response.json();
  return data;
};
