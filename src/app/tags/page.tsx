'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import Tag from "@/Components/Tag/Tag";

const Tags = () => {
    const router = useRouter()
    const {isAuth, token} = UseMainContext()

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
        <div className="w-full h-full">
            <section className='mx-auto w-full h-full relative ' style={{maxWidth: '95%'}}>
                {/*header*/}
                <div className="flex">
                    <button className="py-2 px-16 relative bg-[#11111120]">
                        <span className="text-white 2xl:text-[20px] lg:text-[18px]">Popular</span>
                        <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0' />
                    </button>
                    <button className={`py-2 px-16 bg-[#000000]`}>
                        <span className={`text-white  2xl:text-[20px] lg:text-[18px]`}>By Name</span>
                        <span className='h-[2.5px] w-full bg-[#353B4B] absolute bottom-0 left-0' />
                    </button>
                </div>
                {/*main section*/}
                <div className="h-[80%] overflow-y-scroll">
                    <div className="p-6 flex flex-wrap w-full gap-6 gap-y-16 ">
                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>

                        <Tag name={'java'}/>

                        <Tag name={'javascript'}/>

                        <Tag name={'php'}/>

                        <Tag name={'sql'}/>

                        <Tag name={'css'}/>

                        <Tag name={'mysql'}/>

                        <Tag name={'ios'}/>

                        <Tag name={'django'}/>

                        <Tag name={'swift'}/>

                        <Tag name={'ruby'}/>

                        <Tag name={'.net'}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tags
