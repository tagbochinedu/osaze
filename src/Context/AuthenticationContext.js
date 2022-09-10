import React, { useContext, useState } from "react";
const AuthenticationContext = React.createContext();

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  const[cart, setCart] = useState([])

  const value = {cart, setCart};
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
