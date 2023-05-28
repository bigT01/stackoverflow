import axios from "@/axios";
import {UseMainContext} from "@/Context/MainContext";

const PublishButton = () => {
    const { setPublishing, publishText, PublishImage, codeText, userId, tagName, description} = UseMainContext();

    const handlePublish = () => {
        if (codeText && publishText && PublishImage && tagName) {
            const content = [{text: description}, {code: codeText}, {image: PublishImage}]
            axios.post('api/posts/createPost', {
                title: publishText,
                content: content,
                tagName: tagName,
                authorId: userId
            })
                .then(res => {
                    setPublishing(false)
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <button className="px-4 py-2 h-fit"
                style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() =>handlePublish()}>
            <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium">PUBLISH</p>
        </button>
    )
}

export default PublishButton