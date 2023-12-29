import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null);
    const [age,setAge] = useState(null);
    const login = (user,age) => {
        setUser(user);
        setAge(age);
      };

    return <AuthContext.Provider value={{user,age,login}}>{children}</AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext);
}