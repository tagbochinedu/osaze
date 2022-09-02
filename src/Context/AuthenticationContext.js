import React, { useContext } from "react";
const AuthenticationContext = React.createContext();

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  

  const value = {};
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
