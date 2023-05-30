'use client';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";
import PostShort from "@/Components/Posts/PostShort";

const Saved = () => {
    const router = useRouter()
    const {isAuth, userId, setSearch} = UseMainContext()
    const [savedPosts, setSavedPosts] = useState<any>(null)

    useEffect(() => {
        setSearch('')
        if (!isAuth) {
            router.push('/login')
        }

        axios.get(`api/starred/user/${userId}`)
            .then(res => {
                setSavedPosts(res?.data)
            })
            .catch(err => console.log(err))

        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return(
        <section className="w-full h-full mx-auto " style={{maxWidth: '95%'}}>
            <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold">STARRED QUESTIONS</h1>
            <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[84%] lg:h-[84%]'>
                <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2">

                    {savedPosts ? savedPosts.map((item:any) => (
                        <PostShort key={item.starredId} id={item?.post?.postId} title={item?.post?.title}
                                   content={item?.post?.content} tags={item?.post?.tag?.name} answers={item?.post?.numberOfAnsers}
                                   status={item?.post?.status}/>
                    )): null}

                    <div className="pb-20" />
                </div>
            </div>
        </section>
    )
}

export default Saved
