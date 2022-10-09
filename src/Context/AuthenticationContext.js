import React, { useContext, useState } from "react";



const AuthenticationContext = React.createContext();

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  //userData storage state
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("osazeUserObject"))
  );
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  //Utilities State
  const [loading, setLoading] = useState(false);

  const Logout = () => {
    localStorage.removeItem("osazeUserObject");
    localStorage.removeItem("token");
    setUserData(JSON.parse(localStorage.getItem("osazeUserObject")));
    setToken(JSON.parse(localStorage.getItem("token")));
  };

  

  const value = {
    userData,
    setUserData,
    loading,
    setLoading,
    token,
    setToken,
    Logout,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
