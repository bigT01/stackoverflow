'use client';
import {usePathname, useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import PostShort from "@/Components/Posts/PostShort";

const TagPost = () => {
    const pathname = usePathname()
    const router = useRouter()
    const {isAuth, setSearch} = UseMainContext()
    const [title, setTitle] = useState<string>('')
    const [post, setPost] = useState<any>()

    useEffect(() => {
        if (!isAuth) {
            router.push('/login')
        }
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
        setSearch('')
    }, []);

    useEffect(() => {
        const id = (pathname.split('/')[2])
        setTitle(id)
        axios.get(`api/posts/tag/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))

    }, [pathname])

    return(
        <section className="w-full h-full mx-auto " style={{maxWidth: '95%'}}>
            <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold mb-5">{title}</h1>
            <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[84%] lg:h-[84%]'>
                <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2" style={{gridAutoRows: 100}}>

                    {post ? post.map((postItem:any) => (
                        <PostShort key={postItem?.postId} id={postItem?.postId} title={postItem.title}
                                   content={postItem?.content} tags={postItem?.tag?.name} answers={postItem?.numberOfAnsers}
                                   status={postItem?.status}/>
                    )): null}

                    <div className="pb-20" />
                </div>
            </div>
        </section>
    )
}

export default TagPost
