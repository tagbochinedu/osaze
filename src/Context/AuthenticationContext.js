import React, { useContext, useState } from "react";
const AuthenticationContext = React.createContext();

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(false)

  const value = {userData, setUserData, loading, setLoading};
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
