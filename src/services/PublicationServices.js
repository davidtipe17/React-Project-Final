import { API_URL } from "@lib/Enviroments";

    export const listPosts = async (list) => {
    const response = await fetch(`${API_URL}/publications`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    return data;
  };


   export const createPost = async (post) => {
    const response = await fetch(`${API_URL}/publications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      
    });
    const data = await response.json();
    return data;
  };

  export const listPostsTotal = async (list) => {
    const response = await fetch(`${API_URL}/publications/pubTotal`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    return data;
  };

  export const listPostsTotalById = async (id) => {
    const response = await fetch(`${API_URL}/publications/pubTotal/${id}`);
    const data = await response.json();
    return data;
  };



  export const GetPostById = async (id) => {
    const response = await fetch(`${API_URL}/publications/${id}`);
    const data = await response.json();
    return data;
  };

  export const DeletePost = async (id) => {
    const response = await fetch(`${API_URL}/comentaries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


  export const UpdatePost = async (post) => {
    const response = await fetch(`${API_URL}/comentaries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    return data ;
  };
  