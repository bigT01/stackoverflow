'use client';
import React, {useEffect, useRef, useState} from "react";
import HoveringComponent from "@/Components/Comment/hoveringComponent";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";
import Loading from "@/Components/Loading";

const PostPublishingComponent = () => {
    const {isPublish, setPublishing, publishText, setPublishTexting, PublishImage, setPublishingImage, codeText, setCodeTexting, userId, tagName, setTag, description, setPublishDescription} = UseMainContext()
    const popupRef = useRef(null);

    const [typeAns, setTypeAns] = useState<'TEXT' | 'CODE' | 'IMAGE'>('TEXT')
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)


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
    };

    function onChange(newValue: any) {
        setCodeTexting(newValue);
    }

    const handlePublish = () => {
        if (codeText && publishText && PublishImage) {
            setIsLoading(true)
            const content = [{text: description}, {code: codeText}, {image: PublishImage}]
            axios.post('api/posts/createPost', {
                title: publishText,
                content: content,
                tagName: tagName,
                authorId: userId
            })
                .then(res => {
                    setPublishing(false)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false)
                })
        }
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPublishing(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);


    return (
        <>
            <div className="absolute w-full h-full left-0 top-0 z-10 bg-[#00000040]"
                 style={{backdropFilter: 'blur(15px)'}} />

            <div className="absolute bg-[#111111] px-6 py-4 z-20" ref={popupRef}
                 style={{top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}}>
                <div className="flex justify-between gap-10 items-center mb-5">
                    <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold whitespace-nowrap">ASK
                        QUESTION</h1>

                    <div className="flex gap-3">
                        <button
                            className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'TEXT' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                            style={{border: `1px solid ${typeAns === 'TEXT' ? 'white' : '#FFFFFF50'}`}}
                            onClick={(e) => setTypeAns('TEXT')}>TEXT
                        </button>
                        <button
                            className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'CODE' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                            style={{border: `1px solid ${typeAns === 'CODE' ? 'white' : '#FFFFFF50'}`}}
                            onClick={(e) => setTypeAns('CODE')}>CODE
                        </button>
                        <button
                            className={`2xl:px-8 lg:px-6 py-2 ${typeAns === 'IMAGE' ? 'text-white' : 'text-[#FFFFFF50]'} 2xl:text-[18px] lg:text-[16px]`}
                            style={{border: `1px solid ${typeAns === 'IMAGE' ? 'white' : '#FFFFFF50'}`}}
                            onClick={(e) => setTypeAns('IMAGE')}>IMAGE
                        </button>
                    </div>

                    <button className="px-4 py-2 h-fit"
                            style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() =>handlePublish()}>
                        <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium">PUBLISH</p>
                    </button>
                </div>

                {!isLoading && typeAns === "TEXT" && (
                    <div className="bg-[#00000050] px-4 py-2 mt-5  relative">
                        <input
                            className="bg-black 2xl:text-[28px] lg:text-[24px] placeholder:text-[#FFFFFF20] px-4 py-2 w-full h-auto mb-2"
                            placeholder='Type title' value={publishText} onChange={(e) => setPublishTexting(e.target.value)}/>
                        <textarea
                            className="bg-black 2xl:text-[20px] lg:text-[18px] placeholder:text-[#FFFFFF20] px-4 py-2 w-full h-[250px]"
                            placeholder='Type text' value={description} onChange={(e) => setPublishDescription(e.target.value)}/>
                        <div className="flex gap-5 items-center">
                            <p className="2xl:text-[24px] lg:text-[20px]">Tag</p>
                            <input className="bg-black 2xl:text-[30px] lg:text-[24px]" type="text" value={tagName} onChange={e => setTag(e.target.value)}/>
                        </div>

                    </div>
                )}

                {!isLoading &&typeAns === "CODE" && isPublish && (
                    <div className="bg-[#00000050] px-4 py-2 mt-5 h-[87%] relative" id={'code_publish'}>
                        <div className="mb-2" />
                        <textarea className="text-white w-full bg-inherit focus-visible:outline-none h-[250px]" value={codeText} onChange={(e) => {onChange(e.target.value)}} />
                    </div>
                )}

                {!isLoading && typeAns === "IMAGE" && (
                    <div className="bg-[#00000050] px-4 py-2 mt-5 h-[400px] relative" onDrop={handleImageDrop}
                         onDragOver={handleDragOver}>
                        <HoveringComponent/>
                        {PublishImage ? (
                            <>
                                <img src={PublishImage} alt="Preview" style={{maxWidth: '100%', maxHeight: '100%'}}
                                     className="relative z-20"/>

                                <button className="px-4 py-2 h-fit absolute top-0 right-0 z-20"
                                        style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() => setPublishingImage('')}>
                                    <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">X</p>
                                </button>
                            </>

                        ) : null}
                    </div>
                )}
                {isLoading && (
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <Loading/>
                    </div>
                )}
            </div>
        </>
    )
}

export default PostPublishingComponent
