'use client';
import PostShort from "@/Components/Posts/PostShort";
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import {useRouter} from "next/navigation";

const Search = () => {
    const router = useRouter()
    const { isAuth, searchText } = UseMainContext()
    const [savedPosts, setSavedPosts] = useState<any>(null)

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
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get(`api/search/search?query=${searchText}`)
                .then(res => setSavedPosts(res?.data))
                .catch(err => console.log(err))
        }, 300);

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, [searchText])

    return(
        <section className="w-full h-full mx-auto " style={{maxWidth: '95%'}}>
            <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold mb-5">SEARCH</h1>
            <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[84%] lg:h-[84%]'>
                <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2" style={{gridAutoRows: 100}}>

                    {savedPosts ? savedPosts.map((postItem:any) => (
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

export default Search
