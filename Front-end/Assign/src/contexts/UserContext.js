import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setUser(localStorage.getItem("authToken"));
      setUserRole(localStorage.getItem("userRole"));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRole,
        setUserRole,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
