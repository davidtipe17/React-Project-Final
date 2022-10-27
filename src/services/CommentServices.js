import { API_URL } from "../lib/Enviroments";

export const createComment = async (comment, token) => {
  let formData = new FormData();
  formData.append("message", comment.message);
  formData.append("image_url", comment.image_url);
  formData.append("publication_id", comment.publication_id);
  console.log(formData);

  const response = await fetch(`${API_URL}/commentaries`, {
    method: "POST",
    headers: {
       Authorization: "Bearer " + token,
    },
    body: formData,
    
  });
  const data = await response.json();
  return data;
};

  
export const updateComment = async (comment, id, token) => {
  let formData = new FormData();
  formData.append("message", comment.message);
  formData.append("image_url", comment.image_url);
  console.log(formData);

  const response = await fetch(`${API_URL}/commentaries/${id}`, {
    method: "PUT",
    headers: {
       Authorization: "Bearer " + token,
    },
    body: formData,
    
  });
  const data = await response.json();
  return data;
};


export const getCommmentById = async (id, token) => {
  const response = await fetch(`${API_URL}/commentaries/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const deleteComment = async (id, token) => {
  const response = await fetch(`${API_URL}/commentaries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
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