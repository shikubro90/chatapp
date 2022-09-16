import { onAuthStateChanged } from "firebase/auth"
import {createContext, useEffect, useState} from "react"
import { auth } from "../firebase"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            currentUser(user)
            console.log(user)
        })
    },[])

    <AuthContext.Provider va>
        {children}
    </AuthContext.Provider>
}