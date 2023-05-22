'use client';
import {createContext, ReactNode, useContext, useState} from "react";

type MainProviderType = {
    children: ReactNode
}

type MainContextType = {
    setAuth: (data: boolean) => void,
    isAuth: boolean,
    sessionToken: (token: string) => void,
    token: string
}


const MainContext = createContext({} as MainContextType)

export const UseMainContext = () => {
    return useContext(MainContext)
}


export const MainProvider = ({children}: MainProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [token, setToken] = useState<string>('')


    const setAuth = (isAuth: boolean) => {
        setIsAuth(isAuth)
    }

    const sessionToken = async (token: string) => {
        setToken(token)
    }


    return(
        <MainContext.Provider value={{
            setAuth,
            isAuth,
            sessionToken,
            token
        }}>
            {children}
        </MainContext.Provider>
    )
}
