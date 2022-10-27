import { API_URL } from "@lib/Enviroments";


   export const createReply = async (reply) => {
    const response = await fetch(`${API_URL}/replycomment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
      
    });
    const data = await response.json();
    return data;
  };


  export const GetReplyById = async (id) => {
    const response = await fetch(`${API_URL}/replycomment/${id}`);
    const data = await response.json();
    return data;
  };

  export const DeleteReply = async (id) => {
    const response = await fetch(`${API_URL}/replycomment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };


  export const UpdateReply = async (reply) => {
    const response = await fetch(`${API_URL}/replycomment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
    });
    const data = await response.json();
    return data ;
  };
  