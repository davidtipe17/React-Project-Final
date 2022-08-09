import { createContext, useState } from "react";
import { getUser } from "../services"
// nota
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] =
    useState(JSON.parse(localStorage.getItem("helpCenter.user"))) || [];

  const login = async (correo, pass) => {
    const dataUser = await getUser();
    const authUser = dataUser.find(async (user) => {
      return user.correo === correo && user.contrasena === pass;
    });

    if (authUser !== undefined) {
      localStorage.setItem("helpCenter.user", JSON.stringify(authUser));
      setUser(authUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("helpCenter.user");
    setUser([]);
    window.location.href = "/login";
  };

  const isAuth = () => {
    return user.name ? true : false;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
