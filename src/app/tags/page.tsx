'use client';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import Tag from "@/Components/Tag/Tag";
import axios from "@/axios";

const Tags = () => {
    const router = useRouter()
    const {isAuth, setSearch} = UseMainContext()

    const [isPopular, setIsPopular] = useState<boolean>(true)
    const [tags, setTags] = useState<any>()

    useEffect(() => {
        setSearch('')
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

    useEffect(() => {
        if(isAuth) {
            if(isPopular){
                axios.get('api/tags/popular')
                    .then(res => setTags(res.data))
                    .catch(err => console.log(err))
            }
            else{
                axios.get('api/tags/alphabetical')
                    .then(res => setTags(res.data))
                    .catch(err => console.log(err))
            }
        }
    }, [isPopular])

    return(
        <div className="w-full h-full">
            <section className='mx-auto w-full h-full relative ' style={{maxWidth: '95%'}}>
                {/*header*/}
                <div className="flex">
                    <button className={`py-2 px-16 relative ${isPopular ? 'bg-[#11111120]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(true)}>
                        <span className="text-white 2xl:text-[20px] lg:text-[18px]">Popular</span>
                        {isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                    <button className={`py-2 px-16 relative ${!isPopular ? 'bg-[#11111120]' : 'bg-[#000000]'}`} onClick={() => setIsPopular(false)}>
                        <span className={`text-white  2xl:text-[20px] lg:text-[18px]`}>By Name</span>
                        {!isPopular && <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0'/>}
                    </button>
                </div>
                {/*main section*/}
                <div className="h-[80%] overflow-y-scroll">
                    <div className="p-6 flex flex-wrap w-full gap-6 gap-y-16 ">

                        {tags ? tags.map((tagItem: any) => (<Tag key={tagItem?.tagId} name={tagItem?.name}/>)): null}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tags
