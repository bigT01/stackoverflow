import {useState} from "react";
import HoveringComponent from "@/Components/Comment/hoveringComponent";
import {UseMainContext} from "@/Context/MainContext";
import AnswerButton from "@/Components/Comment/AnswerButton";

const ImageType = () => {
    const {setPublishingImage, PublishImage} = UseMainContext()
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [isHovering, setIsHovering] = useState(false)


    const handleImageDrop = (event: any) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                setPublishingImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
        setIsHovering(true)
        setPublishingImage('')
    };

    const handleDragLeave = () => {
        setIsHovering(false)
    };

    return(
        <div className="bg-[#00000050] px-4 py-2 mt-5 h-[87%] relative" onDrop={handleImageDrop}
             onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
            <HoveringComponent/>
            {PublishImage ? (
                <>
                    <img src={PublishImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} className="relative z-20"/>
                    <button className="px-4 py-2 h-fit absolute top-0 right-0 z-20"
                            style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() => setPublishingImage('')}>
                        <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">X</p>
                    </button>
                </>
            ) : null}
            <AnswerButton />
        </div>
    )
}

export default ImageType
