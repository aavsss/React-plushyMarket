import { createContext } from "react";

export const UserContext = createContext({
    userEmail: "",
    setUserEmail: () => { }
});

