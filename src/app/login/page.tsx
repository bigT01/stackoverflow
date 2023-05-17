'use client';
import Image from "next/image";
import {useEffect} from "react";

const Login = () => {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return(
        <div className='container'>
            <div className='flex w-screen h-screen bg-[#22202F]'>
                <div className="w-1/2 h-full relative bg-[#c0c0c01a]">
                    <div className="px-40 pt-40 mb-auto flex items-center justify-center">
                        <div>
                            <Image src={'./logo.svg'} alt={'icon-logo'} width={435} height={100.25} className='mb-16'/>
                            <h5 className='text-white font-medium text-[24px] mb-5'>Sign in</h5>

                            <form>
                                <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="white" fill-opacity="0.5"/>
                                    </svg>

                                    <input type="text" className='h-auto w-full border-none text-[18px] placeholder-gray-100' style={{background:'none'}} placeholder='Enter nickname'/>
                                </div>

                                <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-6">
                                    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0.75C3.477 0.75 1.5 2.727 1.5 5.25V6C0.675 6 0 6.675 0 7.5V15C0 15.825 0.675 16.5 1.5 16.5H10.5C11.325 16.5 12 15.825 12 15V7.5C12 6.675 11.325 6 10.5 6V5.25C10.5 2.727 8.523 0.75 6 0.75ZM6 2.25C7.68225 2.25 9 3.56775 9 5.25V6H3V5.25C3 3.56775 4.31775 2.25 6 2.25ZM1.5 7.5H10.5V15H1.5V7.5ZM3 10.5C2.80109 10.5 2.61032 10.579 2.46967 10.7197C2.32902 10.8603 2.25 11.0511 2.25 11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25C3.75 11.0511 3.67098 10.8603 3.53033 10.7197C3.38968 10.579 3.19891 10.5 3 10.5ZM6 10.5C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25C6.75 11.0511 6.67098 10.8603 6.53033 10.7197C6.38968 10.579 6.19891 10.5 6 10.5ZM9 10.5C8.80109 10.5 8.61032 10.579 8.46967 10.7197C8.32902 10.8603 8.25 11.0511 8.25 11.25C8.25 11.4489 8.32902 11.6397 8.46967 11.7803C8.61032 11.921 8.80109 12 9 12C9.19891 12 9.38968 11.921 9.53033 11.7803C9.67098 11.6397 9.75 11.4489 9.75 11.25C9.75 11.0511 9.67098 10.8603 9.53033 10.7197C9.38968 10.579 9.19891 10.5 9 10.5Z" fill="white" fill-opacity="0.5"/>
                                    </svg>

                                    <input type="text" className='h-auto w-full border-none text-[18px] placeholder-gray-100' style={{background:'none'}} placeholder='Enter password'/>
                                </div>

                                <button className='text-white text-[18px] px-12 py-3' style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%);'}}>ENTER</button>
                            </form>
                        </div>

                    </div>
                    <div className="absolute bottom-0 w-full">
                        <button className='w-1/2 align-middle py-3 relative' style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%);'}}>
                            <span>SIGN IN</span>
                            <span className='absolute bottom-0 w-full h-[3px] left-0' style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%);'}}></span>
                        </button>
                        <button className='w-1/2 align-middle py-3' style={{background: 'black'}}>SIGN IN</button>
                    </div>
                </div>

                <div className="w-1/2 h-full flex items-center justify-center bg-[#22202F]">
                    <div className='w-full h-full relative'>
                        <Image src='/signinPhoto.png' alt='img-signIn' fill={true} className='object-cover'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
