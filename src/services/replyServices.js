import { API_URL } from "../lib/Enviroments";

export const createReply = async (reply, token) => {
  let formData = new FormData();
  formData.append("message", reply.message);
  formData.append("image_url", reply.image_url);
  formData.append("commentary_id", reply.commentary_id);
  console.log(formData);

  const response = await fetch(`${API_URL}/replycomment`, {
    method: "POST",
    headers: {
       Authorization: "Bearer " + token,
    },
    body: formData,
    
  });
  const data = await response.json();
  return data;
};

  
export const updateReply = async (reply, id, token) => {
  let formData = new FormData();
  formData.append("message", reply.message);
  formData.append("image_url", reply.image_url);
  console.log(formData);

  const response = await fetch(`${API_URL}/replycomment/${id}`, {
    method: "PUT",
    headers: {
       Authorization: "Bearer " + token,
    },
    body: formData,
    
  });
  const data = await response.json();
  return data;
};


export const getReplyById = async (id, token) => {
  const response = await fetch(`${API_URL}/replycomment/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};


export const deleteReply = async (id, token) => {
  const response = await fetch(`${API_URL}/commentaries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};

  