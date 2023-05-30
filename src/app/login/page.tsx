'use client';
import Image from "next/image";
import {FormEvent, useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import axios from "@/axios";
import {UseMainContext} from "@/Context/MainContext";
import Loading from "@/Components/Loading";

const Login = () => {
    const router = useRouter()
    const {isAuth, setAuth, setUser, setRankUser, setSearch} = UseMainContext()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [isSignIn, setIsSignIn] = useState(true)

    // form inputs place
    const [nickname, setNickname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    //error message
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    const [isRegistered, setIsRegistered] = useState<boolean>(false)


    // animation for sign in
    const [isSignInExiting, setIsSignInExiting] = useState(false)
    const [isSignInExit, setIsSignInExit] = useState(false)
    const [isSignInEntering, setIsSignInEntering] = useState(false)
    const [isSignInEnter, setIsSignInEnter] = useState(true)

    // animation for sign up
    const [isSignUpExiting, setIsSignUpExiting] = useState(false)
    const [isSignUpExit, setIsSignUpExit] = useState(true)
    const [isSignUpEntering, setIsSignUpEntering] = useState(false)
    const [isSignUpEnter, setIsSignUpEnter] = useState(false)

    useEffect(() => {
        setSearch('')
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };

    }, []);

    useEffect(() => {
        if(!isSignIn){
            setIsSignInEnter(false)
            setIsSignUpExit(false)
            setIsSignInExiting(true)
            setIsSignUpEntering(true)
            let timeOut = setTimeout(() => {
                setIsSignInExit(true)
                setIsSignUpEnter(true)
                setIsSignInExiting(false)
                setIsSignUpEntering(false)
            }, 1000)
            return () => clearTimeout(timeOut)
        }
        if(isSignIn && isSignInExit){
            setIsSignInExit(false)
            setIsSignUpEnter(false)
            setIsSignInEntering(true)
            setIsSignUpExiting(true)
            let timeOut = setTimeout(() => {
                setIsSignInEnter(true)
                setIsSignUpExit(true)
                setIsSignInEntering(false)
                setIsSignUpExiting(false)
            }, 1000)
            return () => clearTimeout(timeOut)
        }
        setErrorMessage(false)
    }, [isSignIn])

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        if(isSignIn){
            setIsLoading(true)
            axios.post('api/login', {
                username: nickname,
                password,
            })
                .then((res) => {
                    if(res.data){
                        setAuth(true)
                        setUser(res.data?.userId)
                        setRankUser(res.data?.rank)
                        setIsLoading(false)
                        setErrorMessage(false)
                        router.push('/')
                    }
                })
                .catch(err => {
                    setIsLoading(false)
                    setErrorMessage(true)
                    console.log(err)
                })
        }
        else {
            if(password === confirmPassword) {
                setIsLoading(true)
                axios.post('api/register', {
                    email: email,
                    username: nickname,
                    password,
                })
                    .then((res) => {
                        setIsLoading(false)
                        setIsSignIn(true)
                        setIsRegistered(true)
                    })
                    .catch(err => {
                        setIsLoading(false)
                        console.log(err)
                    })
            }
        }
    }

    useEffect(() => {
        if(isRegistered){
            let timeOut = setTimeout(() => {
                setIsRegistered(false)
            }, 3000)
            return () => clearTimeout(timeOut)
        }
    }, [isRegistered])

    return(
        <div className='container'>
            {isRegistered && (
                <div className="absolute top-5 left-[50%] px-16 py-4 bg-white z-50 rounded-2xl"
                     style={{transform: 'translateX(-50%)'}}>
                    <p className="text-black 2xl:text-[18px] lg:text-[16px]">Success! Please check your email verify it !</p>
                </div>
            )}
            <div className='flex w-screen h-screen bg-[#22202F] '>
                <div className="w-1/2 h-full relative bg-[#c0c0c01a] relative z-10">
                    <div className="px-40 pt-40 mb-auto flex items-center justify-center">
                        <div>
                            <Image src={'./logo.svg'} alt={'icon-logo'} width={435} height={100.25} className='mb-16'/>
                            <h5 className='text-white font-medium text-[24px] mb-5'>{isSignIn ? "Sign in" : "Sign up"}</h5>

                            {!isLoading ? isSignIn ? (
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="text" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Enter nickname' onChange={(e) => setNickname(e.target.value)}/>
                                    </div>

                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-6">
                                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0.75C3.477 0.75 1.5 2.727 1.5 5.25V6C0.675 6 0 6.675 0 7.5V15C0 15.825 0.675 16.5 1.5 16.5H10.5C11.325 16.5 12 15.825 12 15V7.5C12 6.675 11.325 6 10.5 6V5.25C10.5 2.727 8.523 0.75 6 0.75ZM6 2.25C7.68225 2.25 9 3.56775 9 5.25V6H3V5.25C3 3.56775 4.31775 2.25 6 2.25ZM1.5 7.5H10.5V15H1.5V7.5ZM3 10.5C2.80109 10.5 2.61032 10.579 2.46967 10.7197C2.32902 10.8603 2.25 11.0511 2.25 11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25C3.75 11.0511 3.67098 10.8603 3.53033 10.7197C3.38968 10.579 3.19891 10.5 3 10.5ZM6 10.5C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25C6.75 11.0511 6.67098 10.8603 6.53033 10.7197C6.38968 10.579 6.19891 10.5 6 10.5ZM9 10.5C8.80109 10.5 8.61032 10.579 8.46967 10.7197C8.32902 10.8603 8.25 11.0511 8.25 11.25C8.25 11.4489 8.32902 11.6397 8.46967 11.7803C8.61032 11.921 8.80109 12 9 12C9.19891 12 9.38968 11.921 9.53033 11.7803C9.67098 11.6397 9.75 11.4489 9.75 11.25C9.75 11.0511 9.67098 10.8603 9.53033 10.7197C9.38968 10.579 9.19891 10.5 9 10.5Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="password" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    {errorMessage && isSignIn && (
                                        <p className="text-red-500 mb-5 font-bold 2xl:text-[18px] lg:text-[16px]">username
                                        or password is incorrect</p>
                                    )}

                                    <button type={"submit"} className='text-white text-[18px] px-12 py-3 bg-btn-liner'>ENTER</button>
                                </form>
                            ) : (
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    {/*nick name*/}
                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.14286 3.5C8.14286 2.91984 7.91709 2.36344 7.51523 1.9532C7.11337 1.54297 6.56832 1.3125 6 1.3125C5.43168 1.3125 4.88663 1.54297 4.48477 1.9532C4.08291 2.36344 3.85714 2.91984 3.85714 3.5C3.85714 4.08016 4.08291 4.63656 4.48477 5.0468C4.88663 5.45703 5.43168 5.6875 6 5.6875C6.56832 5.6875 7.11337 5.45703 7.51523 5.0468C7.91709 4.63656 8.14286 4.08016 8.14286 3.5ZM2.57143 3.5C2.57143 2.57174 2.93265 1.6815 3.57563 1.02513C4.21862 0.368749 5.09069 0 6 0C6.90931 0 7.78138 0.368749 8.42437 1.02513C9.06735 1.6815 9.42857 2.57174 9.42857 3.5C9.42857 4.42826 9.06735 5.3185 8.42437 5.97487C7.78138 6.63125 6.90931 7 6 7C5.09069 7 4.21862 6.63125 3.57563 5.97487C2.93265 5.3185 2.57143 4.42826 2.57143 3.5ZM1.32054 12.6875H10.6795C10.4411 10.9566 8.98393 9.625 7.22411 9.625H4.77589C3.01607 9.625 1.55893 10.9566 1.32054 12.6875ZM0 13.1879C0 10.4945 2.1375 8.3125 4.77589 8.3125H7.22411C9.8625 8.3125 12 10.4945 12 13.1879C12 13.6363 11.6438 14 11.2045 14H0.795536C0.35625 14 0 13.6363 0 13.1879Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="text" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Enter nickname' onChange={(e) => setNickname(e.target.value)}/>
                                    </div>

                                    {/*email*/}
                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-4">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 3.5C1.725 3.5 1.5 3.725 1.5 4V4.69063L6.89062 9.11563C7.5375 9.64688 8.46562 9.64688 9.1125 9.11563L14.5 4.69063V4C14.5 3.725 14.275 3.5 14 3.5H2ZM1.5 6.63125V12C1.5 12.275 1.725 12.5 2 12.5H14C14.275 12.5 14.5 12.275 14.5 12V6.63125L10.0625 10.275C8.8625 11.2594 7.13438 11.2594 5.9375 10.275L1.5 6.63125ZM0 4C0 2.89688 0.896875 2 2 2H14C15.1031 2 16 2.89688 16 4V12C16 13.1031 15.1031 14 14 14H2C0.896875 14 0 13.1031 0 12V4Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="text" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    {/*create password*/}
                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-6">
                                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0.75C3.477 0.75 1.5 2.727 1.5 5.25V6C0.675 6 0 6.675 0 7.5V15C0 15.825 0.675 16.5 1.5 16.5H10.5C11.325 16.5 12 15.825 12 15V7.5C12 6.675 11.325 6 10.5 6V5.25C10.5 2.727 8.523 0.75 6 0.75ZM6 2.25C7.68225 2.25 9 3.56775 9 5.25V6H3V5.25C3 3.56775 4.31775 2.25 6 2.25ZM1.5 7.5H10.5V15H1.5V7.5ZM3 10.5C2.80109 10.5 2.61032 10.579 2.46967 10.7197C2.32902 10.8603 2.25 11.0511 2.25 11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25C3.75 11.0511 3.67098 10.8603 3.53033 10.7197C3.38968 10.579 3.19891 10.5 3 10.5ZM6 10.5C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25C6.75 11.0511 6.67098 10.8603 6.53033 10.7197C6.38968 10.579 6.19891 10.5 6 10.5ZM9 10.5C8.80109 10.5 8.61032 10.579 8.46967 10.7197C8.32902 10.8603 8.25 11.0511 8.25 11.25C8.25 11.4489 8.32902 11.6397 8.46967 11.7803C8.61032 11.921 8.80109 12 9 12C9.19891 12 9.38968 11.921 9.53033 11.7803C9.67098 11.6397 9.75 11.4489 9.75 11.25C9.75 11.0511 9.67098 10.8603 9.53033 10.7197C9.38968 10.579 9.19891 10.5 9 10.5Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="password" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Create password' onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    {/*confirm password*/}
                                    <div className="flex gap-2 px-4 py-2 w-full bg-gray-400 items-center bg-[#d9d9d933] mb-6">
                                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0.75C3.477 0.75 1.5 2.727 1.5 5.25V6C0.675 6 0 6.675 0 7.5V15C0 15.825 0.675 16.5 1.5 16.5H10.5C11.325 16.5 12 15.825 12 15V7.5C12 6.675 11.325 6 10.5 6V5.25C10.5 2.727 8.523 0.75 6 0.75ZM6 2.25C7.68225 2.25 9 3.56775 9 5.25V6H3V5.25C3 3.56775 4.31775 2.25 6 2.25ZM1.5 7.5H10.5V15H1.5V7.5ZM3 10.5C2.80109 10.5 2.61032 10.579 2.46967 10.7197C2.32902 10.8603 2.25 11.0511 2.25 11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25C3.75 11.0511 3.67098 10.8603 3.53033 10.7197C3.38968 10.579 3.19891 10.5 3 10.5ZM6 10.5C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25C6.75 11.0511 6.67098 10.8603 6.53033 10.7197C6.38968 10.579 6.19891 10.5 6 10.5ZM9 10.5C8.80109 10.5 8.61032 10.579 8.46967 10.7197C8.32902 10.8603 8.25 11.0511 8.25 11.25C8.25 11.4489 8.32902 11.6397 8.46967 11.7803C8.61032 11.921 8.80109 12 9 12C9.19891 12 9.38968 11.921 9.53033 11.7803C9.67098 11.6397 9.75 11.4489 9.75 11.25C9.75 11.0511 9.67098 10.8603 9.53033 10.7197C9.38968 10.579 9.19891 10.5 9 10.5Z" fill="black" fillOpacity="0.7"/>
                                        </svg>

                                        <input type="password" className='h-auto w-full border-none text-[18px] text-black focus-visible:outline-none placeholder-[#00000030]' style={{background:'none'}} placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </div>

                                    <button className='text-white text-[18px] px-12 py-3 bg-btn-liner'>ENTER</button>
                                </form>
                            ) : (
                                <div className="w-full flex justify-center">
                                    <Loading />
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="absolute bottom-0 w-full">
                        <button className='w-1/2 align-middle py-3 relative bg-[]' style={{background: `${isSignIn ? 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)' : "black"}`}} onClick={() => {
                            if(!isSignInEntering && !isSignInExiting){
                                setIsSignIn(true)
                            }
                        }}>
                            <span>SIGN IN</span>
                            {isSignIn && <span className='absolute bottom-0 w-full h-[3px] left-0'
                                   style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}/>}
                        </button>

                        <button className='w-1/2 align-middle py-3 cursor-pointer relative' style={{background: `${!isSignIn ? 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)' : "black"}`}} onClick={() => {
                            if(!isSignInEntering && !isSignInExiting){
                                setIsSignIn(false)
                            }
                        }}>
                            <span>SIGN UP</span>
                            {!isSignIn && <span className='absolute bottom-0 w-full h-[3px] left-0'
                                               style={{background: 'linear-gradient(270deg, #388394 0%, #515898 50%, #823CA4 100%)'}}/>}
                        </button>
                    </div>
                </div>

                <div className="w-1/2 h-screen flex items-center justify-center bg-[#22202F] relative z-0">
                    <div className='w-full h-full relative overflow-hidden flex'>
                        <Image src='/signinPhoto.png' alt='img-signIn' fill={true} className={`object-cover ${isSignInExiting ? 'SignIn-exiting' : null} ${isSignInEntering ? 'SignIn-entering' : null} ${isSignInEnter ? "translate-x-[0%]" : null} ${isSignInExit ? "translate-x-[-100%]" : null}`}/>
                        <Image src='/signUpPhoto.png' alt='img-signIn' fill={true} className={`object-cover ${isSignUpExiting ? 'SignUp-exiting': null} ${isSignUpEntering ? "SignUp-entering": null} ${isSignUpEnter ? "translate-x-[0%]" : null} ${isSignUpExit ? "translate-x-[100%]" : null}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
