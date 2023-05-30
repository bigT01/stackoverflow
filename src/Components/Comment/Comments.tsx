'use client';
import {useEffect, useState} from "react";
import axios from "@/axios";
import {usePathname} from "next/navigation";
import CommentItem from "@/Components/Comment/CommentItem";

type CommentsProps = {
    authorId: string,
    postStatus: string,
    postTag: string
}
const Comments = ({authorId, postStatus, postTag} : CommentsProps) => {
    const pathname = usePathname()
    const [commentData, setCommentData] = useState<any>(null)

    useEffect(() => {
        const id =(pathname.split('/')[2])
        axios.get(`api/answers/${id}`)
            .then(res => setCommentData(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div className="px-6 py-4 bg-[#11111170] flex flex-col gap-5 w-full h-full overflow-y-scroll 2xl:max-h-[600px] lg:max-h-[500px]">
            {/*comment*/}
            {commentData ?
                commentData.length !== 0 ?
                    commentData.map((item: any) => (<CommentItem key={item.id} id={item?.id} title={item?.title} votes={item?.votes} content={item?.content} status={item?.status} createdAt={item?.createdAt} votedBy={item?.votedBy} author={item?.author} postAuthorId={authorId} postStatus={postStatus} postTag={postTag}/>))
                    : (
                        <div className="w-full h-full">
                            <div className="w-full h-full flex justify-center items-center">
                                <h1 className="text-white 2xl:text-[32px] lg:text-[28px] inline">No answers here</h1>
                            </div>
                        </div>
                    )
                : null
            }
        </div>
    )
}

export default Comments
