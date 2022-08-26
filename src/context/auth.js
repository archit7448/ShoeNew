import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  notificationError,
  notifyMessage,
} from "../utility/notification/notify";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(false);
  const successHandler = () => {
    setError(false)
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
    notifyMessage("SUCCESS!");
    navigate("/products");
  };

  const ErrorHandler = () => {
    notificationError("GET ERROR");
  };

  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        params,
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      successHandler();
    } catch (error) {
      ErrorHandler();
      notificationError("error");
    }
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post(`/api/auth/login`, params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      successHandler();
      setError(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    notifyMessage("Logout Succesfully");
    setError(false)
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        error,
        setError,
        LoginHandler,
        SignUpHandler,
        LogOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
