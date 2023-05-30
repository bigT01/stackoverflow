'use client';
import DateFormation from "@/Components/Comment/dateFormation";
import {useState} from "react";
import axios from "@/axios";
import {UseMainContext} from "@/Context/MainContext";
import RatingImage from "@/Components/RatingImage";

type UserInformationProps = {
    author: any,
    createdAt: string,
    status: string,
    postAuthorId: string,
    answerId: string,
    postStatus: string
}

const UserInformation = ({author, createdAt, status, postAuthorId, answerId, postStatus}: UserInformationProps) => {
    const {userId} = UseMainContext()
    const [isHover, setIsHover] = useState<boolean>(false)
    const [accept, setAccept] = useState<boolean>(false)

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleAccept = () => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', userId)
        axios.put(`api/answers/correct/${answerId}`, bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
        setAccept(true)
    }

    return (
        <div className="flex justify-between items-center" onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div className="flex gap-4 items-center">
                {/*user image*/}
                <img src={author?.ava ? author?.ava : '/userPhoto.png'} alt={`user-img`} width={50} height={50} className="rounded-full"/>
                {/*user information and date*/}
                <div className="flex items-baseline gap-2">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-white font-bold 2xl:text-[20px] lg:text-[16px]">{author?.username}</h4>

                        <div className="flex gap-2 items-center">
                            <RatingImage votes={author?.rank} width={32} height={32}/>
                            <p className="text-white 2xl:text-[16px] lg:text-[14px]">{author?.rank} POINTS</p>
                        </div>
                    </div>
                    {<DateFormation createdAt={createdAt}/>}
                </div>
            </div>

            {postStatus === 'Accepted' && status === 'Helpful' && (
                <button>
                    <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 17L7 12L17 22L37 2L42 7L17 32L2 17Z" fill={`#25B800`} stroke="#25B800"
                              strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}

            {postStatus !== 'Accepted' && postAuthorId === userId && isHover && (
                <button onClick={() => handleAccept()}>
                <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 17L7 12L17 22L37 2L42 7L17 32L2 17Z" fill={`#25B800${accept ? '' : '100'}`}
                          stroke="#25B800" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            )}
        </div>

    )
}

export default UserInformation
