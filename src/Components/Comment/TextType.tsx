'use client';
import {useEffect, useState} from "react";
import HoveringComponent from "@/Components/Comment/hoveringComponent";

const TextType = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [isHovering, setIsHovering] = useState(false)
    const [previewImage, setPreviewImage] = useState<any>(null);

    const handleImageDrop = (event: any) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
        setIsHovering(true)
        setPreviewImage(null)
    };

    const handleDragLeave = () => {
        setIsHovering(false)
    };

    return(
        <div className="bg-[#00000050] px-4 py-2 mt-5 h-[87%] relative" onDrop={handleImageDrop}
             onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
            {isHovering && !previewImage ? <HoveringComponent/> : null}
            {previewImage ? (
                <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
            ) : !isHovering ? (
                <>
                    <textarea className="bg-black 2xl:text-[30px] lg:text-[24px] placeholder:text-[#FFFFFF20] px-4 py-2 w-full h-2/6" placeholder='Type text'/>
                </>
            ) : null}
            <button className="px-4 py-2 h-fit absolute bottom-0 right-0"
                    style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}>
                <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">ANSWER</p>
            </button>
        </div>
    )
}

export default TextType
