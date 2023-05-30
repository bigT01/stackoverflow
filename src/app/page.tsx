'use client';
import {useEffect, useState} from "react";
import Tags from "@/Components/Tag/Tags";
import Rating from "@/Components/RatingUsers/Rating";
import VariantQuestion from "@/Components/VariantsQuestions";
import {UseMainContext} from "@/Context/MainContext";
import {useRouter} from "next/navigation";
import ResentQuestions from "@/Components/Posts/ResentQuestions";
import PostPublishingComponent from "@/Components/PostPublishingComponent/PostPublishingComponent";




export default function Home() {
    const router = useRouter()
    const {isAuth, setPublishing, isPublish, setAnswer, setSearch} = UseMainContext()
    const [QuestionType, setQuestionType] = useState<'RECENT QUESTIONS' | 'TOP QUESTIONS' | 'UNANSWERED' | 'UNACCEPTED'>('RECENT QUESTIONS')

    useEffect(() => {
        setSearch('')
        if (!isAuth) {
            router.push('/login')
        }
        setAnswer(false)

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
                        <VariantQuestion name={'RECENT QUESTIONS'} isActive={QuestionType === 'RECENT QUESTIONS'} onClick={() => {setQuestionType('RECENT QUESTIONS')}}/>
                        <VariantQuestion name={'TOP QUESTIONS'} isActive={QuestionType === 'TOP QUESTIONS'} onClick={() => {setQuestionType('TOP QUESTIONS')}}/>
                        <VariantQuestion name={'UNANSWERED'} isActive={QuestionType === 'UNANSWERED'} onClick={() => {setQuestionType('UNANSWERED')}}/>
                        <VariantQuestion name={'UNACCEPTED'} isActive={QuestionType === 'UNACCEPTED'} onClick={() => {setQuestionType('UNACCEPTED')}}/>
                    </div>
                    {/*main section*/}
                    <main className="h-full">
                        {/*header*/}
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='font-bold text-[40px]'>{QuestionType}</h1>
                            <div className="px-4 py-2"
                                 style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}>
                                <button onClick={() => setPublishing(true)} className="text-white text-[18px] font-medium">ASK QUESTION</button>
                            </div>
                        </div>
                        {/*main*/}
                        <div className=' w-full overflow-y-scroll' style={{height: '65%'}}>

                            <ResentQuestions questionsType={QuestionType}/>


                        </div>

                    </main>
                </div>

            </section>

            {isPublish ? (<PostPublishingComponent/>) : null}

        </div>
    ) : null
}

