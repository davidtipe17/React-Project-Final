import { API_URL } from "@lib/Enviroments";

export const SignIn = async (user) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { data, status };
  };


  export const resetPassword = async (email) => {
    const response = await fetch(`${API_URL}/auth/reset_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await response.json();
    const status = response.status;
    return { data, status };
  };


  export const accessToken = async (token) => {
    const response = await fetch(`${API_URL}/auth/token/refresh`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const status = response.status;
    const data = await response.json();
    return { data, status };

  };