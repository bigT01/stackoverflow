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
    isPublish: boolean,
    setPublishing: (isPublish: boolean) => void,
    publishText: string,
    setPublishTexting: (publishText: string) => void,
    codeText: string,
    setCodeTexting: (code: any) => void,
    PublishImage: string,
    setPublishingImage: (image64: string) => void,
    tagName: string,
    setTag: (TagName: string) => void,
    description: string,
    setPublishDescription: (Description: string) => void,
}


const MainContext = createContext({} as MainContextType)

export const UseMainContext = () => {
    return useContext(MainContext)
}


export const MainProvider = ({children}: MainProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [isAnswer, setIsAnswer] = useState<boolean>(false);
    const [isPublish, setIsPublish] = useState<boolean>(false);

    const [publishText, setPublishText] = useState<string>('');
    const [codeText, setCodeText] = useState<any>('');
    const [PublishImage, setPublishImage] = useState<string>('');
    const [tagName, setTagName] = useState<string>('');
    const [description, setDescription] = useState<string>('')

    const setAuth = (isAuth: boolean) => {
        setIsAuth(isAuth)
    }

    const setUser = (userId: string) => {
        setUserId(userId)
    }

    const setAnswer = (isAnswer: boolean) => {
        setIsAnswer(isAnswer)
        if (!isAnswer) {
            setPublishText('')
            setCodeText('')
            setPublishImage('')
        }
    }

    const setTag = (TagName: string) => {
        setTagName(TagName)
    }

    const setPublishing = (isPublish: boolean) => {
        setIsPublish(isPublish)
        if(!isPublish){
            setPublishText('')
            setCodeText('')
            setPublishImage('')
            setTagName('')
            setDescription('')
        }
    }

    const setPublishTexting = (publishText: string) => {
        setPublishText(publishText)
    }

    const setCodeTexting = (code: any) => {
        setCodeText(code)
    }

    const setPublishingImage = (image64: string) => {
        setPublishImage(image64)
    }

    const setPublishDescription = (description: string) => {
        setDescription(description)
    }

    return(
        <MainContext.Provider value={{
            isAuth,
            setAuth,
            userId,
            setUser,
            isAnswer,
            setAnswer,
            isPublish,
            setPublishing,
            publishText,
            setPublishTexting,
            codeText,
            setCodeTexting,
            PublishImage,
            setPublishingImage,
            tagName,
            setTag,
            description,
            setPublishDescription
        }}>
            {children}
        </MainContext.Provider>
    )
}
