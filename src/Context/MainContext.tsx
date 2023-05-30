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
    userRank: number,
    setRankUser:(rank: number) => void,
    isSettings: boolean,
    setSettings: (rank: boolean) => void,
    isUpUserInfo: boolean,
    setUpUserInfo: (isUpUserInfo: boolean) => void,
    isLoading: boolean,
    setLoading: (isLoading: boolean) => void,
    searchText: string,
    setSearch: (text: string) => void,
}


const MainContext = createContext({} as MainContextType)

export const UseMainContext = () => {
    return useContext(MainContext)
}


export const MainProvider = ({children}: MainProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [userRank, setUserRank] = useState<number>(0)
    const [isAnswer, setIsAnswer] = useState<boolean>(false);
    const [isPublish, setIsPublish] = useState<boolean>(false);
    const [isSettings, setIsSettings] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [publishText, setPublishText] = useState<string>('');
    const [codeText, setCodeText] = useState<any>('');
    const [PublishImage, setPublishImage] = useState<string>('');
    const [tagName, setTagName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const [searchText, setSearchText] = useState<string>('')


    //trigger
    const [isUpUserInfo, setIsUpUserInfo] = useState(false)

    const setSearch = (text:string) => {
        setSearchText(text)
    }

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

    const setRankUser = (rank: number) => {
        setUserRank(rank)
    }

    const setSettings = (isSettings: boolean) => {
        setIsSettings(isSettings)
    }

    const setUpUserInfo = (isUpUserInfo: boolean) => {
        setIsUpUserInfo(isUpUserInfo)
    }

    const setLoading = (isLoading:boolean) => {
        setIsLoading(isLoading)
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
            setPublishDescription,
            userRank,
            setRankUser,
            isSettings,
            setSettings,
            isUpUserInfo,
            setUpUserInfo,
            isLoading,
            setLoading,
            searchText,
            setSearch
        }}>
            {children}
        </MainContext.Provider>
    )
}
