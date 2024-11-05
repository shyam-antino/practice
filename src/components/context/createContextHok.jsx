import { createContext, useContext, useState } from "react";  

export const Context=createContext("");

export const usingContext=()=>{
   return useContext(Context);
}



const ContextHook=({children})=>{
    const [data,setData]=useState("shyam");
    const setup="context setting";
   return (
     <Context.Provider value={{data,setData,setup}}>
        {children}
     </Context.Provider>
   )
}
export default ContextHook;