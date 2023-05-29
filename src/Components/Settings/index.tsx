"use client";
import React, {useEffect, useRef, useState} from "react";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";

const Settings = () => {
    const popupRef = useRef(null);
    const {setSettings, userId, setUpUserInfo} = UseMainContext()
    const [file, setFile] = useState<any>(null);
    const [preview, setPreview] = useState<any>(null);
    const[userName, setUserName] = useState<string>('')
    const[group, setGroup] = useState<string>('')
    const[userData, setUserData] = useState<any>(null)

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null);
            setPreview(null);
        }
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setSettings(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    useEffect(() => {
        axios.get(`api/users/${userId}`)
            .then((res) => {
                setUserData(res?.data)
                setUpUserInfo(true)
            })
            .catch(err => console.log(err))
    }, [])

    const cancelHandler = () => {
        setFile(null);
        setPreview(null);
    }

    const saveHandler = () => {
        if(userName || group || preview){
            let params: any = {}
            userName ? params.username = userName : params.username = userData?.username;
            group ? params.groups = group : params.groups = userData?.groups;
            preview ? params.ava = preview : params.ava = userData?.ava;
            axios.post(`api/users/update/${userId}`, params)
                .then(res => setSettings(false))
                .catch(err => console.log(err))
        }
    }

    return(
        <>
            <div className="absolute w-full h-full left-0 top-0 z-10 bg-[#00000040]"
                 style={{backdropFilter: 'blur(15px)'}} />

            <div className="absolute bg-[#111111] px-6 py-4 z-20 w-2/6" ref={popupRef}
                 style={{top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}}>
                <h1 className="text-white 2xl:text-[40px] lg:text-[36px] font-bold whitespace-nowrap">
                    SETTINGS</h1>
                <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="white" fill-opacity="0.5"/>
                    </svg>

                    <input type="text" className='h-auto w-full border-none text-[18px] text-white placeholder-gray-100' style={{background:'none'}} placeholder='Change name' onChange={(e) => setUserName(e.target.value)}/>

                </div>
                <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="white" fill-opacity="0.5"/>
                    </svg>

                    <input type="text" className='h-auto w-full border-none text-[18px] text-white placeholder-gray-100' style={{background:'none'}} placeholder='Change group' onChange={(e) => setGroup(e.target.value)}/>
                </div>
                <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="white" fill-opacity="0.5"/>
                    </svg>

                    <label htmlFor="file-upload" className="w-full h-auto text-white border-none text-[18px] placeholder-gray-100 cursor-pointer">
                        {file ? file.name : "Change avatar"}
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />

                    {preview && (<button onClick={() => cancelHandler()}>
                        <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9515 7.64768C17.57 7.01292 17.57 5.98206 16.9515 5.34729C16.333 4.71252 15.3286 4.71252 14.7101 5.34729L9.49997 10.6996L4.28486 5.35237C3.66637 4.7176 2.66195 4.7176 2.04346 5.35237C1.42497 5.98713 1.42497 7.01799 2.04346 7.65276L7.25856 13L2.04841 18.3524C1.42992 18.9871 1.42992 20.018 2.04841 20.6528C2.66689 21.2875 3.67132 21.2875 4.28981 20.6528L9.49997 15.3004L14.7151 20.6477C15.3336 21.2824 16.338 21.2824 16.9565 20.6477C17.575 20.0129 17.575 18.9821 16.9565 18.3473L11.7414 13L16.9515 7.64768Z"
                                fill="#111111" fillOpacity="0.7"/>
                        </svg>
                    </button>)}
                </div>
                <button className="px-4 py-2 h-fit w-full"
                        style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}} onClick={() => saveHandler()}>
                    <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">SAVE</p>
                </button>
            </div>
        </>
    )
}

export default Settings
