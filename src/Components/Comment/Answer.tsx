'use client';
import {UseMainContext} from "@/Context/MainContext";
import {useState} from "react";
import TextType from "@/Components/Comment/TextType";
import CodeType from "@/Components/Comment/CodeType";
import ImageType from "@/Components/Comment/ImageType";
import AnswerUserInfo from "@/Components/Comment/userInformation/AnswerUserInfo";
import Loading from "@/Components/Loading";

const Answer = () => {
    const {setAnswer, isAnswer, isLoading, setLoading} = UseMainContext()
    const [typeAns, setTypeAns] = useState<'TEXT' | 'CODE' | 'IMAGE'>('TEXT')


    return(
        <div className={`bg-[#11111170] px-6 py-4 w-full ${isAnswer ? 'h-[80vh]' : 'h-auto'}`}>
            <div className="flex justify-between w-full items-center">
                {/*user answer information*/}
                <AnswerUserInfo />
                {/*buttons group*/}
                <div className="flex gap-3">
                    {isAnswer && (<button className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'TEXT' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                             style={{border: `1px solid ${typeAns === 'TEXT' ? 'white' : '#FFFFFF50'}`}} onClick={(e) => setTypeAns('TEXT')}>TEXT</button>)}
                    {isAnswer && (<button className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'CODE' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                             style={{border: `1px solid ${typeAns === 'CODE' ? 'white' : '#FFFFFF50'}`}} onClick={(e) => setTypeAns('CODE')}>CODE</button>)}
                    {isAnswer && (<button className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'IMAGE' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                             style={{border: `1px solid ${typeAns === 'IMAGE' ? 'white' : '#FFFFFF50'}`}} onClick={(e) => setTypeAns('IMAGE')}>IMAGE</button>)}
                    {/*answer button*/}
                    {!isAnswer ? (<button className="px-4 py-2 h-fit bg-btn-liner"
                                      onClick={() => {
                                          setAnswer(true)
                                      }}>
                        <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium">ANSWER</p>
                    </button>) : (<button className="px-4 py-2 h-fit"
                                        style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}
                                        onClick={() => {
                                            setAnswer(false)
                                        }}>
                        <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium">X</p>
                    </button>)}
                </div>
            </div>
            {typeAns === "TEXT" && isAnswer && !isLoading && (<TextType/>)}

            {typeAns === "CODE" && isAnswer && !isLoading  && (<CodeType />)}

            {typeAns === "IMAGE" && isAnswer && !isLoading && (<ImageType />)}

            {isLoading && (
                <div className="px-6 py-4 flex justify-center items-center w-full h-full overflow-y-scroll 2xl:max-h-[600px] lg:max-h-[500px]">
                    <Loading />
                </div>
            )}
        </div>
    )
}

export default Answer
