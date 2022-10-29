import { API_URL } from "../lib/Enviroments";

export const listPosts = async (perpage, page, token) => {
  const response = await fetch(`${API_URL}/publications/?per_page=${perpage}&page=${page}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};


export const createPost = async (post, token) => {
    let formData = new FormData();
    
    formData.append("description", post.description);
    formData.append("title", post.title);
    formData.append("image_url", post.image_url);
    console.log(formData);

    const response = await fetch(`${API_URL}/publications/`, {
      method: "POST",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: formData,
      
    });
    const data = await response.json();
    return data;
  };
  

export const listPostsTotal = async (perpage, page, token) => {
  const response = await fetch(`${API_URL}/publications/pubTotal`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const listPostsTotalById = async (id, token) => {
  const response = await fetch(`${API_URL}/publications/pubTotal/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const getPostById = async (id, token) => {
  const response = await fetch(`${API_URL}/publications/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const DeletePost = async (id, token) => {
  const response = await fetch(`${API_URL}/comentaries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const UpdatePost = async (post, id, token) => {
  let formData = new FormData();
  formData.append("title", post.title);
  formData.append("description", post.description);
  formData.append("image_url", post.image_url);
  console.log(formData);

    const response = await fetch(`${API_URL}/publications/${id}`, {
      method: "PUT",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: formData,
      
    });
    const data = await response.json();
    return data;
  };
 
  
  