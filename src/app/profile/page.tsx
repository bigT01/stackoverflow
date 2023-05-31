'use client';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";
import RatingImage from "@/Components/RatingImage";
import PostShort from "@/Components/Posts/PostShort";

const Profile = () => {
    const router = useRouter()
    const {isAuth, userId, userRank, setSearch} = UseMainContext()

    const [isPopular, setIsPopular] = useState<boolean>(true)
    const [information, setInformation] = useState<any>()
    const [image64, setImage64] = useState<any>('/avatarka.png')
    const [posts, setPosts] = useState<any>(null)

    useEffect(() => {
        setSearch('')
        if(!isAuth) {
            router.push('/login')
        }
        if(isAuth){
            axios.get(`api/users/${userId}`)
                .then(res => {setInformation(res.data)})
                .catch(err => {console.log(err)})
        }
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    useEffect(() => {
        if(information){
            if(information?.ava){
                setImage64(information?.ava)
            }
        }
    }, [information])

    useEffect(() => {
        if(isPopular){
            axios.get(`api/users/myPosts/${userId}`)
                .then(res => setPosts(res?.data))
                .catch(err => console.log(err))
        }
        else{
            axios.get(`api/users/myAnswers/${userId}`)
                .then(res => setPosts(res?.data))
                .catch(err => console.log(err))
        }
    }, [isPopular])

    return(
        <section className=' w-full h-full relative ' >
            {/*header*/}
            <header className="py-8 px-4 w-full bg-[#33333370] mb-5">
                <div className="mx-auto flex gap-10" style={{maxWidth: '95%'}}>
                    {/*user own info*/}
                    <div className="flex 2xl:gap-10 lg:gap-5 items-center w-2/4">
                        <img src={image64} alt="img-userPhoto" className='2xl:w-[297px]  2xl:h-[297px] lg:w-[150px] lg:h-[150px] rounded-full'/>
                        <div className="flex flex-col 2xl:gap-4 lg:gap-2">
                            <h1 className="2xl:text-[40px] lg:text-[28px] font-medium">{information?.username}</h1>
                            <p className="2xl:text-[24px] lg:text-[14px] text-[#FFFFFF50]">{information?.groups}</p>
                            <div className="flex gap-5 items-center">
                                <RatingImage votes={userRank} width={90} height={90} className='2xl:w-[90px]  2xl:h-[90px] lg:w-[54px] lg:h-[54px]'/>
                                <p className={"2xl:text-[24px] lg:text-[18px] text-white"}>{userRank} POINTS</p>
                            </div>
                        </div>
                    </div>
                    {/*user additional information*/}
                    <div className="flex gap-10 pt-10">
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col 2xl:px-16 lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">{information?.numberOfAnswers}</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Answers</p>
                        </div>
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col px-16 lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">{information?.rank}</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Votes</p>
                        </div>
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">{information?.numberOfPosts}</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Posted questions</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto flex gap-5 flex-col h-full" style={{maxWidth: '95%'}}>
                <div className="flex mb-5">
                    <button className={`py-2 px-16 relative ${isPopular ? 'bg-[#11111170]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(true)}>
                        <span className="text-white 2xl:text-[20px] lg:text-[18px]">My Questions</span>
                        {isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                    <button className={`py-2 px-16 relative ${!isPopular ? 'bg-[#11111170]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(false)}>
                        <span className={`text-white  2xl:text-[20px] lg:text-[18px]`}>My Answers</span>
                        {!isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                </div>

                <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[40%] lg:h-[50%]'>
                    <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2" style={{gridAutoRows: 95}}>

                        {posts ? posts.map((postItem:any) => (
                            <PostShort key={postItem?.post?.postId} id={postItem?.post?.postId} title={postItem?.post?.title}
                                       content={postItem?.post?.content} tags={postItem?.post?.tag?.name} answers={postItem?.post?.numberOfAnsers}
                                       status={postItem?.post?.status}/>)) : null}

                        <div className="pb-20" />
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Profile
