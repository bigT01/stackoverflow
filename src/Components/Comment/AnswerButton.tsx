import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";
import {usePathname} from "next/navigation";

const AnswerButton = () => {
    const pathname = usePathname()
    const {publishText, codeText, PublishImage, userId, setAnswer, setLoading} = UseMainContext()

    const handleAnswer = () => {
        if (codeText && publishText && PublishImage) {
            const content = [{text: publishText}, {code: codeText}, {image: PublishImage}]
            const id = Number(pathname.split('/')[2])
            setLoading(true)
            axios.post('api/answers/createAnswer', {
                title: publishText,
                content: content,
                postId: id,
                authorId: userId
            })
                .then(res => {
                    setAnswer(false)
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err)
                })
        }
    }

    return(
        <button className="px-4 py-2 h-fit absolute bottom-0 right-0 z-20"
                style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() =>handleAnswer()}>
            <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">ANSWER</p>
        </button>
    )
}

export default AnswerButton
