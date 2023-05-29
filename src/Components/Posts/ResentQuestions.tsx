'use client';
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import PostShort from "@/Components/Posts/PostShort";

type ResentQuestionsProps = {
    questionsType: 'RECENT QUESTIONS' | 'TOP QUESTIONS' | 'UNANSWERED' | 'UNACCEPTED'
}

const ResentQuestions = ({questionsType}: ResentQuestionsProps) => {
    const [posts, setPosts] = useState<any>()

    const {isAuth} = UseMainContext()

    useEffect(() => {
        if (isAuth) {
            let path = 'recent'
            if(questionsType === 'RECENT QUESTIONS'){
                path = "recent"
            }
            if(questionsType === 'TOP QUESTIONS'){
                path = "top"
            }
            if(questionsType === 'UNANSWERED'){
                path = "unanswered"
            }
            if(questionsType === 'UNACCEPTED'){
                path = "unaccepted"
            }
            axios.get(`api/posts/${path}`)
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
        }
    }, [questionsType])

    return (
        <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-2 lg:grid-cols-1" style={{gridAutoRows: 95}}>
            {posts ? posts.map((postItem:any) => (
                <PostShort key={postItem?.postId} id={postItem?.postId} title={postItem.title}
                           content={postItem?.content} tags={postItem?.tag?.name} answers={postItem?.numberOfAnsers}
                           status={postItem?.status}/>)) : null}
            <div className="mb-20"/>
        </div>
    )
}

export default ResentQuestions
