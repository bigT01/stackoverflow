'use client';
import PostShort from "@/Components/Posts/PostShort";
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import {useRouter} from "next/navigation";
import Tag from "@/Components/Tag/Tag";
import RatingUser from "@/Components/RatingUsers/RatingUser";

const Search = () => {
    const router = useRouter()
    const { isAuth, searchText } = UseMainContext()
    const [savedPosts, setSavedPosts] = useState<any>(null)
    const [tags, setTags] = useState<any>(null)
    const [rank, setRank] = useState<any>(null)
    const [searchType, setSearchType] = useState<'simple' | 'tag' | 'user' >('simple')

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
        if(searchText[0] === '@'){
            setSearchType('user')
            // @ts-ignore
            axios.post(`api/search/search`, {
                query: String(searchText)
            })
                .then(res => setRank(res?.data))
                .catch(err => console.log(err))
        }
        else if(searchText[0] === '#'){
            setSearchType('tag')
            // @ts-ignore
            axios.post(`api/search/search`, {
                query: String(searchText)
            })
                .then(res => setTags(res?.data))
                .catch(err => console.log(err))
        }
        else{
            setSearchType('simple')
            // @ts-ignore
            axios.post(`api/search/search`, {
                    query: String(searchText)
            })
                .then(res => setSavedPosts(res?.data))
                .catch(err => console.log(err))
        }
    }, [searchText])

    return(
        <section className="w-full h-full mx-auto " style={{maxWidth: '95%'}}>
            <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold mb-5">SEARCH</h1>
            <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[84%] lg:h-[84%]'>
                {searchType === "simple" && (
                    <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2"
                         style={{gridAutoRows: 100}}>
                        {savedPosts ? savedPosts.map((postItem: any) => (
                            <PostShort key={postItem?.postId} id={postItem?.postId} title={postItem.title}
                                       content={postItem?.content} tags={postItem?.tag?.name}
                                       answers={postItem?.numberOfAnsers}
                                       status={postItem?.status}/>
                        )) : null}
                        <div className="pb-20"/>
                    </div>
                )}
                {searchType === 'tag' && (
                    <div className="p-6 flex flex-wrap w-full gap-6 gap-y-16 ">

                        {tags ? tags.map((tagItem: any) => (<Tag key={tagItem?.tagId} name={tagItem?.name}/>)): null}
                        
                    </div>
                )}
                {searchType === 'user' && (
                    <div className={"p-4 w-full 2xl:h-[80%] lg:h-[90%] bg-[#33333370] overflow-y-scroll mb-5"}>
                        <table className='w-full'>
                            <thead>
                            <tr className='text-left'>
                                <th className='w-10' />
                                <th>Name</th>
                                <th>Votes</th>
                                <th>Rating</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rank ? rank.map((rankItem: any, index: number) => (
                                <RatingUser key={rankItem.userId} rating={index+1} imgURL={rankItem?.ava ? `${rankItem?.ava}` : '/userPhoto.png'} nick={`@${rankItem?.username}`} votes={rankItem?.rank} id={rankItem?.userId} />
                            )) : null}
                            <div className="pb-20"/>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Search
