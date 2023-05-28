'use client';
import Image from "next/image";
import {useEffect, useState} from "react";
import {CopyBlock, dracula} from "react-code-blocks";
import DateFormation from "@/Components/Comment/dateFormation";

type CommentItemProps = {
    id: string,
    title: string,
    votes: number,
    content: any,
    status: string,
    createdAt: string,
    votedBy: any,
    author: any
}

const CommentItem = ({id, content, author, votedBy, votes, status, createdAt, title}:CommentItemProps) => {
    const [image64, setImage64] = useState<string>('')
    const [titleText, setTitleText] = useState<string>('')
    const [code, setCode] = useState<string>('')

    useEffect(() => {
        if(content){
            const contentParse = JSON.parse(content)
            setTitleText(contentParse[0]?.text)
            setCode(contentParse[1]?.code)
            setImage64(contentParse[2]?.image)
        }
    }, [])
    return(
        <div className="w-full flex flex-col gap-2">
            {/*user information*/}
            <div className="flex gap-4 items-center">
                {/*user image*/}
                <Image src={`/userPhoto.png`} alt={`user-img`} width={50} height={50}/>
                {/*user information and date*/}
                <div className="flex items-baseline gap-2">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-white font-bold 2xl:text-[20px] lg:text-[16px]">Diasnkteam</h4>

                        <div className="flex gap-2 items-center">
                            <Image src='/rank0.png' alt='img-rank0' width={32} height={32}/>
                            <p className="text-white 2xl:text-[16px] lg:text-[14px]">RANK 0</p>
                        </div>
                    </div>
                    {<DateFormation createdAt={createdAt} />}
                </div>
            </div>
            {/*text*/}
            {titleText && <p className="text-white 2xl:text-[18px] lg:text-[16px]">{titleText}</p>}
            {code && (<CopyBlock
                text={code}
                language={'python'}
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
            <div className="flex gap-4 items-center">
                {/*like*/}
                <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2422 1.28513C13.2578 1.48826 13.918 2.47654 13.7148 3.49216L13.625 3.93748C13.418 4.98044 13.0352 5.97263 12.5 6.87498H18.125C19.1602 6.87498 20 7.71482 20 8.74998C20 9.47263 19.5898 10.1015 18.9883 10.414C19.4141 10.7578 19.6875 11.2851 19.6875 11.875C19.6875 12.789 19.0312 13.5508 18.168 13.7148C18.3398 14 18.4375 14.332 18.4375 14.6875C18.4375 15.5195 17.8945 16.2265 17.1445 16.4687C17.1719 16.5976 17.1875 16.7344 17.1875 16.875C17.1875 17.9101 16.3477 18.75 15.3125 18.75H11.5039C10.7617 18.75 10.0391 18.5312 9.42188 18.1211L7.91797 17.1172C6.875 16.4219 6.25 15.25 6.25 13.9961V12.5V10.625V9.65232C6.25 8.51169 6.76953 7.43748 7.65625 6.72263L7.94531 6.49216C8.98047 5.66404 9.6875 4.49998 9.94531 3.2031L10.0352 2.75779C10.2383 1.74216 11.2266 1.08201 12.2422 1.28513ZM1.25 7.49998H3.75C4.44141 7.49998 5 8.05857 5 8.74998V17.5C5 18.1914 4.44141 18.75 3.75 18.75H1.25C0.558594 18.75 0 18.1914 0 17.5V8.74998C0 8.05857 0.558594 7.49998 1.25 7.49998Z" fill="white"/>
                    </svg>

                    <p className="text-white 2xl:text-[18px] lg:text-[16px]">{votes}</p>
                </div>
                {/*dislike*/}
                <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2422 18.7149C13.2578 18.5117 13.918 17.5235 13.7148 16.5078L13.625 16.0625C13.418 15.0196 13.0352 14.0274 12.5 13.125H18.125C19.1602 13.125 20 12.2852 20 11.25C20 10.5274 19.5898 9.89846 18.9883 9.58596C19.4141 9.24221 19.6875 8.71487 19.6875 8.12502C19.6875 7.21096 19.0312 6.44924 18.168 6.28518C18.3398 6.00002 18.4375 5.66799 18.4375 5.31252C18.4375 4.48049 17.8945 3.77346 17.1445 3.53127C17.1719 3.40237 17.1875 3.26565 17.1875 3.12502C17.1875 2.08987 16.3477 1.25002 15.3125 1.25002H11.5039C10.7617 1.25002 10.0391 1.46877 9.42188 1.87893L7.91797 2.88284C6.875 3.57815 6.25 4.75002 6.25 6.00393V7.50002V9.37502V10.3477C6.25 11.4883 6.76953 12.5625 7.65625 13.2774L7.94531 13.5078C8.98047 14.336 9.6875 15.5 9.94531 16.7969L10.0352 17.2422C10.2383 18.2578 11.2266 18.918 12.2422 18.7149ZM1.25 12.5H3.75C4.44141 12.5 5 11.9414 5 11.25V2.50002C5 1.80862 4.44141 1.25002 3.75 1.25002H1.25C0.558594 1.25002 0 1.80862 0 2.50002V11.25C0 11.9414 0.558594 12.5 1.25 12.5Z" fill="white"/>
                    </svg>

                    <p className="text-white 2xl:text-[18px] lg:text-[16px]">{votes}</p>
                </div>
                {/*comment*/}
                <div className="flex gap-2 items-center">
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.36952 7.13672C5.8578 7.625 6.65077 7.625 7.13905 7.13672L12.1391 2.13672C12.4984 1.77734 12.6039 1.24219 12.4086 0.773437C12.2133 0.304687 11.7601 -3.25748e-08 11.2523 -5.4772e-08L1.25233 -4.91886e-07C0.748425 -5.13912e-07 0.291393 0.304687 0.0960807 0.773437C-0.0992318 1.24219 0.0101432 1.77734 0.365612 2.13672L5.36561 7.13672L5.36952 7.13672Z" fill="white" fill-opacity="0.5"/>
                    </svg>

                    <p className="text-white 2xl:text-[18px] lg:text-[16px]">37 comments</p>
                </div>
            </div>
        </div>
    )
}

export default CommentItem
