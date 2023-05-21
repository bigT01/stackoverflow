'use client';
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type MainProviderType = {
    children: ReactNode
}

type MainContextType = {
    setAuth: (data: boolean) => void,
    isAuth: boolean,
}


const MainContext = createContext({} as MainContextType)

export const UseMainContext = () => {
    return useContext(MainContext)
}


export const MainProvider = ({children}: MainProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const setAuth = (isAuth: boolean) => {
        setIsAuth(isAuth)
    }


    return(
        <MainContext.Provider value={{
            setAuth,
            isAuth,
        }}>
            {children}
        </MainContext.Provider>
    )
}
