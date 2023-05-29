'use client';
import {useEffect, useState} from "react";
import Image from "next/image";
import { CopyBlock,dracula } from "react-code-blocks";
import {usePathname, useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";
import Comments from "@/Components/Comment/Comments";
import Answer from "@/Components/Comment/Answer";

const Post = () => {
    const pathname = usePathname()
    const router = useRouter()
    const {isAuth, isAnswer} = UseMainContext()
    const [userInfo, setUserInfo] = useState<any>()
    const [post, setPost] = useState<any>()
    const [content, setContent] = useState<any>()
    const [image64, setImage64] = useState<any>('/defaultQuestion.png')
    const [createdAt, setCreatedAt] = useState<string>('')
    const [userAva64, setUserAva64] = useState('')
    const [TagCode, setTagCode] = useState('python')
    const [code, setCode] = useState('#code code code')

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

    // get main data of post
    useEffect(() => {
        // if(isAuth){
            const id =(pathname.split('/')[2])
            axios.get(`api/posts/${id}`)
                .then(res => setPost(res.data))
                .catch(err => console.log(err))
        // }
    }, [pathname])

    useEffect(() => {
        if(post){
            if(post?.content){
                setContent(JSON.parse(post?.content))
            }
            // formatting date to in design
            const dateString = post?.createdAt;
            const date = new Date(dateString);
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear().toString();

            const formattedDate = `${day}.${month}.${year}`;
            setCreatedAt(formattedDate)

            post?.tag?.name && setTagCode(post?.tag?.name)

            // author information finding
            axios.get(`api/users/${post?.authorId}`)
                .then(res => setUserInfo(res.data))
                .catch(err => console.log(err))
        }
    }, [post])

    // formatting post photo from base64
    useEffect(() => {
        if(content){
            setImage64(content[2]?.image)
            content[1]?.code && setCode(content[1]?.code)

        }
    }, [content])

    // formatting user photo from base64
    useEffect(() => {
        if(userInfo){
            if(userInfo?.ava) {
                setUserAva64('data:image/png;base64,' + userInfo?.ava)
            }
        }
    }, [userInfo])

    return(
        <div className='text-white'>
            <section className="grid grid-cols-2 gap-10 w-full h-full mx-auto " style={{maxWidth: '95%'}}>
                {/*left side*/}
                <div className='w-full h-full flex flex-col gap-5'>
                    {/*main problem*/}
                    <div className='bg-[#11111170] px-6 py-4 overflow-y-scroll overflow-x-hidden h-[500px]'>
                        <h4 className='text-white font-bold 2xl:text-[30px] lg:text-[24px] mb-3'>{post?.title}</h4>
                        <div className='h-[1px] w-full bg-[#353535] mb-3'/>
                        <p className="text-white font-medium 2xl:text-[18px] lg:text-[16px] mb-5">{content ? content[0]?.text : null} </p>
                        <div className="flex justify-between items-end">
                            <img src={image64} alt={`defaultQuestion-img`} height={315} width={460}/>
                            <div className="flex flex-col gap-5">
                                <div className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">{post?.tag?.name}</div>

                                {userInfo && <div className="flex gap-2 items-center">
                                    {userInfo?.ava ? <img src={userAva64} alt={`${userInfo?.username}-img`} width={41} height={41}
                                                            style={{width: 45, height: 45}}/> : <Image src={`/userPhoto.png`} alt={`user-img`} width={41} height={41}
                                                              style={{width: 45, height: 45}}/>}
                                    <div className="flex flex-col gap-1 w-full">
                                        <p className="text-white font-medium 2xl:text-[18px] lg:text-[16px]">{userInfo?.username}</p>
                                        <p className="text-[#FFFFFF50] font-regular 2xl:text-[16px] lg:text-[14px]">{createdAt}</p>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                    {/*code*/}
                    <div className='w-full overflow-x-scroll overflow-y-scroll' style={{maxHeight: '25%'}}>
                        {post?.tag?.name && <CopyBlock
                            text={code}
                            language={TagCode}
                            showLineNumbers='true'
                            codeBlock
                            wrapLines
                            theme={dracula}
                        />}
                    </div>
                </div>
                {/*right side*/}
                <div className="flex flex-col gap-5 w-full">
                    {/*header*/}
                    <Answer />
                    {/*comment*/}
                    {!isAnswer && (<Comments authorId={post?.authorId} postStatus={post?.status}/>)}
                </div>
            </section>
        </div>
    )
}

export default Post
