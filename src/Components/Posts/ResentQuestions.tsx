'use client';
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import Image from "next/image";
import PostShort from "@/Components/Posts/PostShort";

const ResentQuestions = () => {
    const [posts, setPosts] = useState<any>()
    const {isAuth} = UseMainContext()

    useEffect(() => {
        if (isAuth) {
            axios.get('api/posts/allPosts')
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-2 lg:grid-cols-1">
            {posts ? posts.map((postItem:any) => (
                <PostShort key={postItem?.postId} id={postItem?.postId} title={postItem.title}
                           content={postItem?.content} tags={postItem?.tag?.name} answers={postItem?.numberOfAnsers}
                           status={postItem?.status}/>)) : null}
        </div>
    )
}

export default ResentQuestions
