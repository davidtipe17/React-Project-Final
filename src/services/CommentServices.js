import { API_URL } from "@lib/Enviroments";

export const createComment = async (comment) => {
    const response = await fetch(`${API_URL}/comentaries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
      
    });
    const data = await response.json();
    return data;
  };


  export const GetCommentById = async (id) => {
    const response = await fetch(`${API_URL}/comentaries/${id}`);
    const data = await response.json();
    return data;
  };


  export const DeleteComment = async (id) => {
    const response = await fetch(`${API_URL}/comentaries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


  export const UpdateComment = async (comment) => {
    const response = await fetch(`${API_URL}/comentaries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data ;
  };
  

  



  /*export const searchComments = async () => {
    try {
      const response = await fetch(config);
      const data = await response.json();
  
      return data;
    } catch (error) {
      return error;
    }
  };

  */