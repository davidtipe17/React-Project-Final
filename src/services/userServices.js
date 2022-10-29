import { API_URL } from "../lib/Enviroments";

export const listUsers = async (perpage, page) => {
    const response = await fetch(`${API_URL}/users/?per_page=${perpage}&page=${page}`);
    const data = await response.json();
    return { data };
  };


export const createUser = async (user) => {
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("last_name", user.last_name);
    formData.append("image_url", user.image_url);
    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("password", user.password);
    console.log(formData);

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
      },
      body: formData,
      
    });
    const data = await response.json();
    return data;
  };

export const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();
    return data;
  };


export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


export const updateUser = async (user, id) => {

    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("last_name", user.last_name);
    formData.append("image_url", user.image_url);
    formData.append("username", user.username);

    console.log(formData);

    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  };

  