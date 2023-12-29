import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services";
import { userPer } from "../services";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserPermissions, setCurrentUserPermissions] = useState();

  useEffect(() => {
    getCurrentUser().then((response) => {
      setCurrentUser(response);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      userPer(currentUser).then((res) => {
        console.log("resres",res);
        setCurrentUserPermissions(res);
      });
    }
    
  }, [currentUser]);

  console.log("currentPer", currentUserPermissions);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser,currentUserPermissions }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
