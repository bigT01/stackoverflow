'use client';
import {useEffect, useState} from "react";
import PostShort from "@/Components/Posts/PostShort";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";

const Profile = () => {
    const router = useRouter()
    const {isAuth} = UseMainContext()

    const [isPopular, setIsPopular] = useState<boolean>(true)
    const [information, setInformation] = useState<any>()

    useEffect(() => {
        if(!isAuth) {
            router.push('/login')
        }
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])
    return(
        <section className=' w-full h-full relative ' >
            {/*header*/}
            <header className="py-8 px-4 w-full bg-[#33333370] mb-5">
                <div className="mx-auto flex gap-10" style={{maxWidth: '95%'}}>
                    {/*user own info*/}
                    <div className="flex 2xl:gap-10 lg:gap-5 items-center w-2/4">
                        <img src={`userPhoto.png`} alt="img-userPhoto" className='2xl:w-[297px]  2xl:h-[297px] lg:w-[150px] lg:h-[150px]'/>
                        <div className="flex flex-col 2xl:gap-4 lg:gap-2">
                            <h1 className="2xl:text-[40px] lg:text-[28px] font-medium">BEIBARYS USSENOV</h1>
                            <p className="2xl:text-[24px] lg:text-[14px] text-[#FFFFFF50]">SE-2001</p>
                            <div className="flex gap-5 items-center">
                                <img src={`rank0.png`} alt="rank0.png" className='2xl:w-[90px]  2xl:h-[90px] lg:w-[54px] lg:h-[54px]'/>
                                <p className={"2xl:text-[24px] lg:text-[18px] text-white"}>RANK 0</p>
                            </div>
                        </div>
                    </div>
                    {/*user additional information*/}
                    <div className="flex gap-10 pt-10">
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col 2xl:px-16 lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">17</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Answers</p>
                        </div>
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col px-16 lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">313</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Votes</p>
                        </div>
                        <div className="bg-[#c0c0c010] h-fit 2xl:gap-3 lg:gap-1 flex items-center justify-center flex-col lg:px-10 2xl:py-4 lg:py-2" style={{backdropFilter: 'blur(2px)'}}>
                            <h5 className="2xl:text-[24px] lg:text-[18px] text-white">23</h5>
                            <p className="2xl:text-[20px] lg:text-[16px] text-[#FFFFFF50]">Posted questions</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto flex gap-5 flex-col h-full" style={{maxWidth: '95%'}}>
                <div className="flex mb-5">
                    <button className={`py-2 px-16 relative ${isPopular ? 'bg-[#11111170]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(true)}>
                        <span className="text-white 2xl:text-[20px] lg:text-[18px]">Popular</span>
                        {isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                    <button className={`py-2 px-16 relative ${!isPopular ? 'bg-[#11111170]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(false)}>
                        <span className={`text-white  2xl:text-[20px] lg:text-[18px]`}>By Name</span>
                        {!isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                </div>

                <div className=' w-full overflow-x-hidden overflow-y-scroll 2xl:h-[40%] lg:h-[50%]'>
                    <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-3 lg:grid-cols-2">

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href={`post/123`}>
                            <div className="flex gap-3">
                                <img src={'/defaultQuestion.png'} alt={`defaultQuestion-img`} width={160}
                                     height={92}/>
                                <div>
                                    <h4 className="text-[22px] font-bold">Help me to fix this bug. When I
                                        run IDE to provide this code ...</h4>
                                    <div className="flex justify-between gap-2">
                                        {/*Tags*/}
                                        <p className="font-light text-[17px] opacity-50">Tags: <span>JAVA</span>
                                        </p>
                                        {/*Answers*/}
                                        <p className="font-light text-[17px] opacity-50">Answers: <span>1 200</span>
                                        </p>
                                        {/*Status*/}
                                        <p className="font-light text-[17px] opacity-50">Accepted</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="pb-20" />
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Profile
