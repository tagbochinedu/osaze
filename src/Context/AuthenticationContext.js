import React, { useContext, useState} from "react";
const AuthenticationContext = React.createContext();

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userObject')));
  const [loading, setLoading] = useState(false);
  const Logout = () =>{
    localStorage.removeItem('userObject')
    setUserData(JSON.parse(localStorage.getItem('userObject')))
  }

  const value = { userData, setUserData, loading, setLoading, Logout };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
