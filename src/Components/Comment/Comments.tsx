'use client';
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "@/axios";
import {usePathname} from "next/navigation";
import CommentItem from "@/Components/Comment/CommentItem";

const Comments = () => {
    const pathname = usePathname()
    const [commentData, setCommentData] = useState<any>(null)

    useEffect(() => {
        const id =(pathname.split('/')[2])
        axios.get(`api/answers/${id}`)
            .then(res => setCommentData(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div className="px-6 py-4 bg-[#11111170] flex flex-col gap-5 w-full h-full overflow-y-scroll max-h-[60%]">
            {/*comment*/}
            {commentData ? commentData.map((item: any) => (<CommentItem key={item.id} id={item?.id} title={item?.title} votes={item?.votes} content={item?.content} status={item?.status} createdAt={item?.createdAt} votedBy={item?.votedBy} author={item?.author}/>)): null}

        </div>
    )
}

export default Comments
