'use client';
import Image from "next/image";
import {useEffect, useState} from "react";
import {CopyBlock, dracula} from "react-code-blocks";
import DateFormation from "@/Components/Comment/dateFormation";
import UserInformation from "@/Components/Comment/userInformation";
import axios from "@/axios";
import {UseMainContext} from "@/Context/MainContext";
import DotsLoading from "@/Components/Loading/dotsLoading";

type CommentItemProps = {
    id: string,
    title: string,
    votes: number,
    content: any,
    status: string,
    createdAt: string,
    votedBy: any,
    author: any,
    postAuthorId: string,
    postStatus: string,
    postTag: string
}

const CommentItem = ({id, content, author, votedBy, votes, status, createdAt, title, postAuthorId, postStatus, postTag}: CommentItemProps) => {
    const {userId} = UseMainContext()
    const [image64, setImage64] = useState<string>('')
    const [titleText, setTitleText] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const [commentsData, setCommentsData] = useState<any>(null)
    const [moreCommentLen, setMoreCommentLen] = useState<number>(0)
    const [isComment, setIsComment] = useState<boolean>(false)
    const [commentText, setCommentText] = useState<string>('')
    const [isHandleCommentPost, setIsHandleCommentPost] = useState<boolean>(false)

    const [isChatGPT, setIsChatGPT] = useState<boolean>(false)
    const [isDotsLoading, setDotsLoading] = useState<boolean>(false)
    const [chatGPTText, setChatGPTText] = useState<any>(null)

    useEffect(() => {
        if (content) {
            const contentParse = JSON.parse(content)
            setTitleText(contentParse[0]?.text)
            setCode(contentParse[1]?.code)
            setImage64(contentParse[2]?.image)
        }
        axios.get(`/api/comments/${id}`)
            .then(res => {
                setMoreCommentLen(res.data.length)
                setCommentsData(res.data)
            })
            .catch(err => {console.log(err)})
    }, [])

    const handleLike = () => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', userId)
        axios.post(`api/answers/upvote/${id}`, bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDislike = () => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', userId)
        axios.post(`api/answers/downvote/${id}`, bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleComment = () => {
        if(commentText){
            axios.post('api/comments/createComment', {
                userId: userId,
                answerId: id,
                comment: commentText
            })
                .then(res => {
                    setIsHandleCommentPost(true)
                    setCommentText('')
                })
                .catch(err => {console.log(err)})
        }
    }

    useEffect(() => {
        if(isChatGPT){
            setDotsLoading(true)
            axios.post(`api/summary/${id}`)
                .then(res => {
                    setChatGPTText(res?.data)
                    setDotsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setDotsLoading(false)
                })
        }
    }, [isChatGPT])

    useEffect(() => {
        if(isHandleCommentPost){
            axios.get(`/api/comments/${id}`)
                .then(res => {
                    setMoreCommentLen(res.data.length)
                    setCommentsData(res.data)
                    setIsHandleCommentPost(false)
                })
                .catch(err => {console.log(err)})
        }
    }, [isHandleCommentPost])

    return (
        <div className="w-full flex flex-col gap-2">
            {/*user information*/}

            <UserInformation author={author} createdAt={createdAt} status={status} postAuthorId={postAuthorId} answerId={id} postStatus={postStatus}/>

            {/*text*/}
            {titleText && <p className="text-white 2xl:text-[18px] lg:text-[16px]">{titleText}</p>}
            {code && (<CopyBlock
                text={code}
                language={postTag}
                showLineNumbers='true'
                codeBlock
                wrapLines
                theme={dracula}
            />)}
            {image64 && (
                <div className="max-w-full w-auto h-[400px] relative">
                    <img src={image64} alt={`defaultQuestion-img`} className="h-full w-full object-cover"/>
                </div>
            )}
            {/*like&dislike&comment*/}
            <div className="flex gap-4 items-center mb-3">
                {/*up vote*/}
                <button className="flex gap-2 items-center" onClick={() => handleLike()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.2422 1.28513C13.2578 1.48826 13.918 2.47654 13.7148 3.49216L13.625 3.93748C13.418 4.98044 13.0352 5.97263 12.5 6.87498H18.125C19.1602 6.87498 20 7.71482 20 8.74998C20 9.47263 19.5898 10.1015 18.9883 10.414C19.4141 10.7578 19.6875 11.2851 19.6875 11.875C19.6875 12.789 19.0312 13.5508 18.168 13.7148C18.3398 14 18.4375 14.332 18.4375 14.6875C18.4375 15.5195 17.8945 16.2265 17.1445 16.4687C17.1719 16.5976 17.1875 16.7344 17.1875 16.875C17.1875 17.9101 16.3477 18.75 15.3125 18.75H11.5039C10.7617 18.75 10.0391 18.5312 9.42188 18.1211L7.91797 17.1172C6.875 16.4219 6.25 15.25 6.25 13.9961V12.5V10.625V9.65232C6.25 8.51169 6.76953 7.43748 7.65625 6.72263L7.94531 6.49216C8.98047 5.66404 9.6875 4.49998 9.94531 3.2031L10.0352 2.75779C10.2383 1.74216 11.2266 1.08201 12.2422 1.28513ZM1.25 7.49998H3.75C4.44141 7.49998 5 8.05857 5 8.74998V17.5C5 18.1914 4.44141 18.75 3.75 18.75H1.25C0.558594 18.75 0 18.1914 0 17.5V8.74998C0 8.05857 0.558594 7.49998 1.25 7.49998Z"
                            fill="white"/>
                    </svg>
                </button>
                <p className="text-white 2xl:text-[18px] lg:text-[16px]">{votes}</p>
                {/*down vote*/}
                <button className="flex gap-2 items-center" onClick={() => handleDislike()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.2422 18.7149C13.2578 18.5117 13.918 17.5235 13.7148 16.5078L13.625 16.0625C13.418 15.0196 13.0352 14.0274 12.5 13.125H18.125C19.1602 13.125 20 12.2852 20 11.25C20 10.5274 19.5898 9.89846 18.9883 9.58596C19.4141 9.24221 19.6875 8.71487 19.6875 8.12502C19.6875 7.21096 19.0312 6.44924 18.168 6.28518C18.3398 6.00002 18.4375 5.66799 18.4375 5.31252C18.4375 4.48049 17.8945 3.77346 17.1445 3.53127C17.1719 3.40237 17.1875 3.26565 17.1875 3.12502C17.1875 2.08987 16.3477 1.25002 15.3125 1.25002H11.5039C10.7617 1.25002 10.0391 1.46877 9.42188 1.87893L7.91797 2.88284C6.875 3.57815 6.25 4.75002 6.25 6.00393V7.50002V9.37502V10.3477C6.25 11.4883 6.76953 12.5625 7.65625 13.2774L7.94531 13.5078C8.98047 14.336 9.6875 15.5 9.94531 16.7969L10.0352 17.2422C10.2383 18.2578 11.2266 18.918 12.2422 18.7149ZM1.25 12.5H3.75C4.44141 12.5 5 11.9414 5 11.25V2.50002C5 1.80862 4.44141 1.25002 3.75 1.25002H1.25C0.558594 1.25002 0 1.80862 0 2.50002V11.25C0 11.9414 0.558594 12.5 1.25 12.5Z"
                            fill="white"/>
                    </svg>
                </button>
                {/*comment*/}
                <button className="flex gap-2 items-center" onClick={() => setIsComment(old => !old)}>
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.36952 7.13672C5.8578 7.625 6.65077 7.625 7.13905 7.13672L12.1391 2.13672C12.4984 1.77734 12.6039 1.24219 12.4086 0.773437C12.2133 0.304687 11.7601 -3.25748e-08 11.2523 -5.4772e-08L1.25233 -4.91886e-07C0.748425 -5.13912e-07 0.291393 0.304687 0.0960807 0.773437C-0.0992318 1.24219 0.0101432 1.77734 0.365612 2.13672L5.36561 7.13672L5.36952 7.13672Z"
                            fill="white" fillOpacity="0.5"/>
                    </svg>

                    <p className="text-white 2xl:text-[18px] lg:text-[16px]">{moreCommentLen} comments</p>
                </button>
                <button onClick={() => {setIsChatGPT(true)}}>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="31" rx="5" fill="url(#paint0_radial_1446_1900)"/>
                        <g clipPath="url(#clip0_1446_1900)">
                            <path d="M22.8793 13.9575C23.0724 13.3853 23.1394 12.7789 23.0758 12.179C23.0122 11.5791 22.8194 10.9996 22.5104 10.4791C22.0524 9.69196 21.3527 9.06872 20.5124 8.69935C19.672 8.32999 18.7345 8.23359 17.835 8.42408C17.4293 7.97295 16.9306 7.61253 16.3723 7.36695C15.814 7.12136 15.209 6.99629 14.5978 7.00008C13.6781 6.99789 12.7816 7.28392 12.0373 7.81691C11.293 8.3499 10.7396 9.10233 10.4566 9.96571C9.85756 10.0867 9.29158 10.3326 8.7966 10.6869C8.30162 11.0412 7.88906 11.4957 7.58653 12.0201C7.12482 12.8051 6.92773 13.7145 7.0237 14.6172C7.11966 15.5198 7.50372 16.3691 8.12048 17.0425C7.92736 17.6147 7.86037 18.2211 7.92398 18.821C7.9876 19.4209 8.18035 20.0004 8.48934 20.5209C8.94745 21.308 9.64714 21.9312 10.4875 22.3006C11.3278 22.6699 12.2653 22.7663 13.1648 22.5759C13.5705 23.027 14.0691 23.3875 14.6274 23.6331C15.1857 23.8786 15.7908 24.0037 16.402 23.9999C17.3221 24.0023 18.2191 23.7161 18.9637 23.1828C19.7082 22.6495 20.2618 21.8965 20.5445 21.0326C21.1436 20.9116 21.7096 20.6657 22.2046 20.3114C22.6995 19.9571 23.1121 19.5026 23.4146 18.9782C23.8757 18.1933 24.0724 17.2841 23.9762 16.3818C23.88 15.4795 23.4959 14.6306 22.8793 13.9575ZM16.4034 22.8886C15.6481 22.8896 14.9165 22.6287 14.3366 22.1513C14.3627 22.1372 14.4086 22.1124 14.4385 22.0943L17.869 20.1391C17.9551 20.0908 18.0266 20.0207 18.0761 19.9361C18.1257 19.8514 18.1515 19.7553 18.1509 19.6576V14.8855L19.601 15.7116C19.6086 15.7154 19.6151 15.7209 19.62 15.7278C19.6249 15.7346 19.6281 15.7425 19.6291 15.7508V19.7028C19.628 20.5469 19.2879 21.3561 18.6833 21.9532C18.0787 22.5504 17.2589 22.8867 16.4034 22.8886ZM9.4662 19.9652C9.08789 19.3202 8.95154 18.5645 9.08103 17.8304C9.1065 17.8454 9.151 17.8723 9.18293 17.8904L12.6134 19.8455C12.6989 19.8949 12.7962 19.9209 12.8952 19.9209C12.9942 19.9209 13.0915 19.8949 13.177 19.8455L17.3653 17.4594V19.1116C17.3658 19.12 17.3641 19.1285 17.3605 19.1361C17.3569 19.1438 17.3514 19.1504 17.3446 19.1555L13.8767 21.1311C13.1349 21.5526 12.2539 21.6666 11.4271 21.448C10.6003 21.2295 9.89505 20.6962 9.4662 19.9652ZM8.56373 12.5757C8.94041 11.9299 9.53535 11.4354 10.2444 11.1789C10.2444 11.2081 10.2427 11.2597 10.2427 11.2955V15.2059C10.2421 15.3036 10.2678 15.3996 10.3173 15.4842C10.3668 15.5688 10.4382 15.6388 10.5242 15.6872L14.7126 18.073L13.2626 18.8991C13.2554 18.9038 13.2472 18.9066 13.2387 18.9074C13.2301 18.9081 13.2215 18.9068 13.2136 18.9035L9.7454 16.9262C9.00492 16.5031 8.4647 15.8075 8.24319 14.992C8.02168 14.1764 8.13695 13.3075 8.56373 12.5757ZM20.4769 15.3111L16.2886 12.925L17.7386 12.0992C17.7457 12.0945 17.7539 12.0917 17.7625 12.0909C17.771 12.0902 17.7796 12.0915 17.7875 12.0949L21.2557 14.0705C21.7871 14.3733 22.22 14.8192 22.5038 15.356C22.7876 15.8929 22.9105 16.4983 22.8581 17.1016C22.8058 17.7048 22.5803 18.2809 22.2082 18.7623C21.836 19.2436 21.3326 19.6105 20.7568 19.8197V15.7924C20.7576 15.6949 20.7321 15.5989 20.6829 15.5144C20.6337 15.4298 20.5626 15.3597 20.4769 15.3111ZM21.9201 13.1679C21.8946 13.1525 21.8501 13.126 21.8182 13.108L18.3877 11.1528C18.3021 11.1035 18.2049 11.0776 18.1059 11.0776C18.0069 11.0776 17.9097 11.1035 17.8242 11.1528L13.6358 13.539V11.8867C13.6354 11.8783 13.637 11.8699 13.6406 11.8622C13.6442 11.8546 13.6497 11.8479 13.6566 11.8428L17.1245 9.86885C17.6558 9.56659 18.2633 9.41986 18.876 9.44581C19.4887 9.47177 20.0813 9.66934 20.5843 10.0154C21.0874 10.3615 21.4802 10.8418 21.7167 11.4001C21.9533 11.9583 22.0238 12.5715 21.9201 13.1679ZM12.8475 16.1128L11.3972 15.2867C11.3895 15.283 11.383 15.2774 11.3781 15.2706C11.3731 15.2637 11.37 15.2558 11.369 15.2475V11.2955C11.3694 10.6902 11.5445 10.0976 11.8739 9.58695C12.2032 9.07631 12.6732 8.6688 13.2288 8.41213C13.7843 8.15545 14.4025 8.06023 15.0109 8.1376C15.6193 8.21498 16.1928 8.46175 16.6642 8.84903C16.6381 8.86311 16.5926 8.88791 16.5623 8.90601L13.1318 10.8612C13.0457 10.9095 12.9742 10.9795 12.9247 11.0641C12.8751 11.1487 12.8493 11.2447 12.8499 11.3424L12.8475 16.1128ZM13.6352 14.4371L15.5006 13.3741L17.366 14.4364V16.5619L15.5006 17.6243L13.6352 16.5619L13.6352 14.4371Z" fill="white" fillOpacity="0.9"/>
                        </g>
                        <defs>
                            <radialGradient id="paint0_radial_1446_1900" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5 5.52299) rotate(90) scale(25.477 22.4289)">
                                <stop stopColor="#5FA36A"/>
                                <stop offset="1" stopColor="#276932"/>
                            </radialGradient>
                            <clipPath id="clip0_1446_1900">
                                <rect width="17" height="17" fill="white" transform="translate(7 7)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            {isComment && (
                <div className="flex flex-col gap-3 ml-5">
                    {commentsData ?
                        commentsData.map((commentsItem: any) => (
                            <div className="flex flex-col gap-1 bg-[#33333340] py-2 px-4" key={commentsItem?.commentId}>
                                <p className="2xl:text-[20px] lg:text-[18px] text-[#FFFFFF70]">{commentsItem?.author?.username}</p>
                                <p className="2xl:text-[18px] lg:text-[16px] text-[#FFFFFF]">{commentsItem?.comment}</p>
                            </div>
                        )) :
                    null}

                    <input type="text" className={"text-white 2xl:text-[18px] lg:text-[16px] w-full p-2 bg-black placeholder:text-gray-400"} placeholder="your comment" value={commentText} onChange={(e) => setCommentText(e.target.value)}/>

                    <button className="px-4 py-2 h-fit bg-btn-liner" onClick={() => handleComment()}>
                        <p className="text-white 2xl:text-[16px] lg:text-[14px] font-medium">Comment</p>
                    </button>
                </div>
            )}
            {isChatGPT && (
                <div className="flex 2xl:gap-4 lg:gap-2">
                    <div className="w-[32px]">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="31" height="31" rx="5" fill="url(#paint0_radial_1446_1900)"/>
                            <g clipPath="url(#clip0_1446_1900)">
                                <path d="M22.8793 13.9575C23.0724 13.3853 23.1394 12.7789 23.0758 12.179C23.0122 11.5791 22.8194 10.9996 22.5104 10.4791C22.0524 9.69196 21.3527 9.06872 20.5124 8.69935C19.672 8.32999 18.7345 8.23359 17.835 8.42408C17.4293 7.97295 16.9306 7.61253 16.3723 7.36695C15.814 7.12136 15.209 6.99629 14.5978 7.00008C13.6781 6.99789 12.7816 7.28392 12.0373 7.81691C11.293 8.3499 10.7396 9.10233 10.4566 9.96571C9.85756 10.0867 9.29158 10.3326 8.7966 10.6869C8.30162 11.0412 7.88906 11.4957 7.58653 12.0201C7.12482 12.8051 6.92773 13.7145 7.0237 14.6172C7.11966 15.5198 7.50372 16.3691 8.12048 17.0425C7.92736 17.6147 7.86037 18.2211 7.92398 18.821C7.9876 19.4209 8.18035 20.0004 8.48934 20.5209C8.94745 21.308 9.64714 21.9312 10.4875 22.3006C11.3278 22.6699 12.2653 22.7663 13.1648 22.5759C13.5705 23.027 14.0691 23.3875 14.6274 23.6331C15.1857 23.8786 15.7908 24.0037 16.402 23.9999C17.3221 24.0023 18.2191 23.7161 18.9637 23.1828C19.7082 22.6495 20.2618 21.8965 20.5445 21.0326C21.1436 20.9116 21.7096 20.6657 22.2046 20.3114C22.6995 19.9571 23.1121 19.5026 23.4146 18.9782C23.8757 18.1933 24.0724 17.2841 23.9762 16.3818C23.88 15.4795 23.4959 14.6306 22.8793 13.9575ZM16.4034 22.8886C15.6481 22.8896 14.9165 22.6287 14.3366 22.1513C14.3627 22.1372 14.4086 22.1124 14.4385 22.0943L17.869 20.1391C17.9551 20.0908 18.0266 20.0207 18.0761 19.9361C18.1257 19.8514 18.1515 19.7553 18.1509 19.6576V14.8855L19.601 15.7116C19.6086 15.7154 19.6151 15.7209 19.62 15.7278C19.6249 15.7346 19.6281 15.7425 19.6291 15.7508V19.7028C19.628 20.5469 19.2879 21.3561 18.6833 21.9532C18.0787 22.5504 17.2589 22.8867 16.4034 22.8886ZM9.4662 19.9652C9.08789 19.3202 8.95154 18.5645 9.08103 17.8304C9.1065 17.8454 9.151 17.8723 9.18293 17.8904L12.6134 19.8455C12.6989 19.8949 12.7962 19.9209 12.8952 19.9209C12.9942 19.9209 13.0915 19.8949 13.177 19.8455L17.3653 17.4594V19.1116C17.3658 19.12 17.3641 19.1285 17.3605 19.1361C17.3569 19.1438 17.3514 19.1504 17.3446 19.1555L13.8767 21.1311C13.1349 21.5526 12.2539 21.6666 11.4271 21.448C10.6003 21.2295 9.89505 20.6962 9.4662 19.9652ZM8.56373 12.5757C8.94041 11.9299 9.53535 11.4354 10.2444 11.1789C10.2444 11.2081 10.2427 11.2597 10.2427 11.2955V15.2059C10.2421 15.3036 10.2678 15.3996 10.3173 15.4842C10.3668 15.5688 10.4382 15.6388 10.5242 15.6872L14.7126 18.073L13.2626 18.8991C13.2554 18.9038 13.2472 18.9066 13.2387 18.9074C13.2301 18.9081 13.2215 18.9068 13.2136 18.9035L9.7454 16.9262C9.00492 16.5031 8.4647 15.8075 8.24319 14.992C8.02168 14.1764 8.13695 13.3075 8.56373 12.5757ZM20.4769 15.3111L16.2886 12.925L17.7386 12.0992C17.7457 12.0945 17.7539 12.0917 17.7625 12.0909C17.771 12.0902 17.7796 12.0915 17.7875 12.0949L21.2557 14.0705C21.7871 14.3733 22.22 14.8192 22.5038 15.356C22.7876 15.8929 22.9105 16.4983 22.8581 17.1016C22.8058 17.7048 22.5803 18.2809 22.2082 18.7623C21.836 19.2436 21.3326 19.6105 20.7568 19.8197V15.7924C20.7576 15.6949 20.7321 15.5989 20.6829 15.5144C20.6337 15.4298 20.5626 15.3597 20.4769 15.3111ZM21.9201 13.1679C21.8946 13.1525 21.8501 13.126 21.8182 13.108L18.3877 11.1528C18.3021 11.1035 18.2049 11.0776 18.1059 11.0776C18.0069 11.0776 17.9097 11.1035 17.8242 11.1528L13.6358 13.539V11.8867C13.6354 11.8783 13.637 11.8699 13.6406 11.8622C13.6442 11.8546 13.6497 11.8479 13.6566 11.8428L17.1245 9.86885C17.6558 9.56659 18.2633 9.41986 18.876 9.44581C19.4887 9.47177 20.0813 9.66934 20.5843 10.0154C21.0874 10.3615 21.4802 10.8418 21.7167 11.4001C21.9533 11.9583 22.0238 12.5715 21.9201 13.1679ZM12.8475 16.1128L11.3972 15.2867C11.3895 15.283 11.383 15.2774 11.3781 15.2706C11.3731 15.2637 11.37 15.2558 11.369 15.2475V11.2955C11.3694 10.6902 11.5445 10.0976 11.8739 9.58695C12.2032 9.07631 12.6732 8.6688 13.2288 8.41213C13.7843 8.15545 14.4025 8.06023 15.0109 8.1376C15.6193 8.21498 16.1928 8.46175 16.6642 8.84903C16.6381 8.86311 16.5926 8.88791 16.5623 8.90601L13.1318 10.8612C13.0457 10.9095 12.9742 10.9795 12.9247 11.0641C12.8751 11.1487 12.8493 11.2447 12.8499 11.3424L12.8475 16.1128ZM13.6352 14.4371L15.5006 13.3741L17.366 14.4364V16.5619L15.5006 17.6243L13.6352 16.5619L13.6352 14.4371Z" fill="white" fillOpacity="0.9"/>
                            </g>
                            <defs>
                                <radialGradient id="paint0_radial_1446_1900" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5 5.52299) rotate(90) scale(25.477 22.4289)">
                                    <stop stopColor="#5FA36A"/>
                                    <stop offset="1" stopColor="#276932"/>
                                </radialGradient>
                                <clipPath id="clip0_1446_1900">
                                    <rect width="17" height="17" fill="white" transform="translate(7 7)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>


                    <div className="flex flex-col 2xl:gap-4 lg:gap-2">
                        {/*header*/}
                        <p className="text-white 2xl:text-[18px] lg:text-[16px]">Summarizing answer:</p>
                        {chatGPTText && (
                            <p className="text-white 2xl:text-[18px] lg:text-[16px]">
                                {chatGPTText?.choices[0]?.text}
                            </p>
                        )}
                        {isDotsLoading && (<DotsLoading/>)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentItem
