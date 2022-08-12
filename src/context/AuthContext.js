import { createContext, useState } from "react";
import { getUser } from "../services";
// nota
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userStorage = JSON.parse(localStorage.getItem("helpCenter.user")) || {};
  const [user, setUser] = useState(userStorage);

  const login = async (correo, pass) => {
    const dataUser = await getUser();
    console.log(correo,pass)
    const authUser = dataUser.find((user) => {
      return user.correo === correo && user.contrasena === pass;
    });
console.log(authUser);
    if (authUser !== undefined) {
      console.log("username", user.name);
      storeUserInLocalStorage(authUser);
      setUser(authUser);
      return true;
    }
    return false;
  };
  const updateUserAuth = (userupdated) => {
    setUser(userupdated);
    storeUserInLocalStorage(userupdated);
  };
  function storeUserInLocalStorage(user) {
    localStorage.setItem("helpCenter.user", JSON.stringify(user));
  }
  const logout = () => {
    localStorage.removeItem("helpCenter.user");
    setUser({});
    window.location.href = "/login";
  };
  const isAuth = () => {
    return user.name ? true : false;
  };
  return (
    <AuthContext.Provider
      value={{ user, updateUserAuth, login, logout, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
