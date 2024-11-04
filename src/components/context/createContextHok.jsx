import { createContext, useContext, useState } from "react";  

export const Context=createContext("");

export const usingContext=()=>{
   return useContext(Context);
}



const ContextHook=({children})=>{
    const [data,setData]=useState("shyam");
   return (
     <Context.Provider value={{data,setData}}>
        {children}
     </Context.Provider>
   )
}
export default ContextHook;