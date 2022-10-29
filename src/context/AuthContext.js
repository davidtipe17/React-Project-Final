import { createContext, useState } from "react";
import { SignIn } from "../services/authServices"
import { getUser } from "../services";
// nota
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [statuslog, setStatuslog] = useState();

  const userStorage = JSON.parse(localStorage.getItem("Foro.user")) || {};
  const [user, setUser] = useState(userStorage);

  const login = async (correo, pass) => {

    const username = correo;
    const password = pass;


    const response = await SignIn({ username, password });
    const { data, status } = response;

    if (status === 200) {
      localStorage.setItem('Token', data.acces_token);
      localStorage.setItem('RefreshToken', data.refresh_token);
      setStatuslog(status)
      console.log(data.acces_token)
      return true
    } else {
      return false
    }
  };

  const updateUserAuth = (userupdated) => {
    setUser(userupdated);
    // storeUserInLocalStorage(userupdated);
  };
  const logout = () => {
    localStorage.removeItem('Token');
    setUser({});
    window.location.href = "/login";
  };
  const isAuth = () => {
    const token = localStorage.getItem('Token')

    if (!token) {
      return false;
    }

    const payload = token.split(".")[1];
    const jsonPayload = JSON.parse(window.atob(payload));
    if (jsonPayload.exp > new Date() / 1000) {
      return true;
    }
    return false

  };
  return (
    <AuthContext.Provider
      value={{ user, updateUserAuth, login, logout, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};