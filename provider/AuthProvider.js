import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          setUser({
            name: "abolfazl",
            family: "portirandazy",
          });
        },
        logout: () => {
          setUser(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};