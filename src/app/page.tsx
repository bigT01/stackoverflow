'use client';
import {useEffect} from "react";
import Tags from "@/Components/Tag/Tags";
import Rating from "@/Components/RatingUsers/Rating";
import VariantQuestion from "@/Components/VariantsQuestions";
import PostShort from "@/Components/Posts/PostShort";
import {UseMainContext} from "@/Context/MainContext";
import {useRouter} from "next/navigation";
import axios from "@/axios";


export default function Home() {
    const router = useRouter()
    const {isAuth, token} = UseMainContext()

    useEffect(() => {
        if (isAuth) {
            const headers = {
                'Cookie': `JSESSIONID=${token}`, // Set the JSESSIONID token as a header
            };
            // @ts-ignore
            axios.get('api/users/rank', {headers})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            router.push('/login')
        }


        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    return isAuth ? (
        <div className='w-full h-full'>
            <section className='mx-auto w-full h-full relative flex gap-10' style={{maxWidth: '95%'}}>
                {/*left side*/}
                <div className="w-4/12 h-full">
                    {/*ratings*/}
                    <Rating/>
                    {/*tags*/}
                    <Tags/>
                </div>
                {/*right side*/}
                <div className="w-8/12 h-full">
                    {/*header*/}
                    <div className="grid grid-cols-4 gap-5 w-full mb-5">
                        <VariantQuestion name={'RECENT QUESTIONS'} isActive={true}/>
                        <VariantQuestion name={'TOP QUESTIONS'} isActive={false}/>
                        <VariantQuestion name={'UNANSWERED'} isActive={false}/>
                        <VariantQuestion name={'UNACCEPTED'} isActive={false}/>
                    </div>
                    {/*main section*/}
                    <main className="h-full">
                        {/*header*/}
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='font-bold text-[40px]'>RECENT QUESTIONS</h1>
                            <div className="px-4 py-2"
                                 style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}>
                                <p className="text-white text-[18px] font-medium">ASK QUESTION</p>
                            </div>
                        </div>
                        {/*main*/}
                        <div className=' w-full overflow-y-scroll' style={{height: '65%'}}>
                            <div className=" grid gap-x-6 h-full w-full gap-y-12 2xl:grid-cols-2 lg:grid-cols-1">
                                {/*inside component*/}
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>
                                <PostShort id={'12312'} title={'Help me to fix this bug. When I run\n' +
                                    '                                                IDE to provide this code ...'}
                                           imageURL={'/defaultQuestion.png'} tags={'JAVA'} answers={'1.200'}
                                           status={'Accepted'}/>

                                <div className="h-20"/>
                            </div>

                        </div>

                    </main>
                </div>

            </section>
        </div>
    ) : null
}

