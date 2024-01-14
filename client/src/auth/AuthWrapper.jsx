import { createContext, useContext, useState } from "react"
// import { RenderHeader } from "../components/structure/Header";
import  RenderRoutes  from "../structure/RenderNavigation";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = (username, password) => {

          
          return new Promise((resolve, reject) => {

               if (password === "letmein12345") {
                    setUser({name: username, isAuthenticated: true})
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })
          
          
     }

     return (
          
               <AuthContext.Provider value={{user, login}}>
                    <>
                         {/* <RenderHeader /> */}
                         {/* <RenderMenu /> */}
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}