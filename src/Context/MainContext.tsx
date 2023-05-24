'use client';
import {createContext, ReactNode, useContext, useState} from "react";

type MainProviderType = {
    children: ReactNode
}

type MainContextType = {
    setAuth: (data: boolean) => void,
    isAuth: boolean,
    setUser: (userId: string) => void,
    userId: string,
    isAnswer: boolean,
    setAnswer: (answer: boolean) => void,
}


const MainContext = createContext({} as MainContextType)

export const UseMainContext = () => {
    return useContext(MainContext)
}


export const MainProvider = ({children}: MainProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>('')
    const [isAnswer, setIsAnswer] = useState<boolean>(false)


    const setAuth = (isAuth: boolean) => {
        setIsAuth(isAuth)
    }

    const setUser = (userId: string) => {
        setUserId(userId)
    }

    const setAnswer = (isAnswer: boolean) => {
        setIsAnswer(isAnswer)
    }


    return(
        <MainContext.Provider value={{
            setAuth,
            isAuth,
            userId,
            setUser,
            isAnswer,
            setAnswer
        }}>
            {children}
        </MainContext.Provider>
    )
}
