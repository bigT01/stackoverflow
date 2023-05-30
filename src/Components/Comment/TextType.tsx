'use client';
import {UseMainContext} from "@/Context/MainContext";

const TextType = () => {
    const {publishText, setPublishTexting} = UseMainContext()

    return(
        <div className="bg-[#00000050] px-4 py-2 mt-5 h-[87%] relative">

            <textarea
                className="bg-black 2xl:text-[20px] lg:text-[18px] placeholder:text-[#FFFFFF20] px-4 py-2 w-full h-2/6"
                placeholder='Type text' value={publishText} onChange={(e) => setPublishTexting(e.target.value)}/>

        </div>
    )
}

export default TextType
