import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        return async function(){
            if(!user){
                const {data} = await axios.get("/user/profile");
                setUser(data);
            }   
        }
    },[])
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}