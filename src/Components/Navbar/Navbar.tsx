'use client';
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import RatingImage from "@/Components/RatingImage";
import axios from "@/axios";
import dateFormation from "@/Components/dateFormation";


const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const { isAuth, setAuth, setUser, userRank, setSettings, isUpUserInfo, userId, setUpUserInfo, setSearch, searchText } = UseMainContext()
    const popupRef = useRef(null);
    const notificationRef = useRef(null);

    const [isProfile, setIsProfile] = useState<boolean>(false)
    const [isNotification, setIsNotification] = useState<boolean>(false)
    const [userImage, setUserImage] = useState<string>('')

    const [percentRating, setPercentRating] = useState<number>(0)
    const [notificationData, setNotificationData] = useState<any>(null)

    const [point, setPoint] = useState<number>(0)

    useEffect(() => {
        if(userId){
            axios.get(`api/users/${userId}`)
                .then((res) => {
                    setUserImage(res?.data?.ava)
                    setUpUserInfo(false)
                })
                .catch(err => console.log(err))

            // setInterval(() => {
                axios.get(`api/notifications/allNotification/${userId}`)
                    .then(res => setNotificationData(res?.data))
                    .catch(err => {console.log(err)})
            // } ,5000)
        }
    } ,[userId])

    useEffect(() => {
        setPoint(userRank)
        if(userRank > 10){
            const NeonRank = userRank - 10
            setPercentRating((NeonRank * 100) / 15)
        }
        if(userRank <= 10 && userRank > 5){
            const goldRank = userRank - 5
            setPercentRating((goldRank * 100) / 5)
        }
        if(userRank <= 5 ){
            setPercentRating((userRank * 100) / 5)
        }
    }, [userRank])

    useEffect(() => {
        function handleClickOutside(event:any) {
            // @ts-ignore
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsProfile(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    useEffect(() => {
        function handleClickOutside(event:any) {
            // @ts-ignore
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotification(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [notificationRef]);

    useEffect(() => {
        if(isUpUserInfo){
            axios.get(`api/users/${userId}`)
                .then((res) => {
                    setUserImage(res.data?.ava)
                    setUpUserInfo(false)
                })
                .catch(err => console.log(err))
        }
    }, [isUpUserInfo])

    const HandleDeleteNotification = () => {
        // axios.delete(`api/notifications/clear/${userId}`)
        //     .then(res => {console.log(res)})
        //     .catch(err => console.log(err))
    }

    const HandleLogOut = () => {
        setAuth(false)
        setUser('')
        router.push('/login')
    }

    return isAuth && pathName !== '/login' ? (
        <nav className='w-full bg-[#11111170] h-[65px] flex items-center mb-4'>
            <div className='mx-auto flex items-center w-full' style={{maxWidth: '95%'}}>
                <Image src='/logo.svg' alt='logo-icon' width={182} height={42} className={'mr-8'}/>

                <div className="flex gap-2 px-4 py-1 w-4/12 items-center bg-[#d9d9d933]">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6256 0.68401C11.8025 -0.0341148 9.76563 -0.186615 7.8525 0.233385C5.92625 0.653385 4.1375 1.66776 2.77875 3.09464C1.45125 4.47651 0.533127 6.24713 0.178751 8.13088C-0.17375 9.97713 0.00562477 11.9221 0.70125 13.669C1.55187 15.8303 3.18188 17.6703 5.22188 18.7796C7.04563 19.7846 9.19062 20.1821 11.2544 19.9203C13.1006 19.6934 14.8737 18.9278 16.3119 17.7496C18.9687 20.4053 21.625 23.0615 24.2806 25.7178C24.76 25.239 25.2394 24.7596 25.7188 24.2803C23.0619 21.624 20.4056 18.9684 17.75 16.3115C19.0375 14.7453 19.8269 12.7784 19.9712 10.7559C20.1225 8.78588 19.675 6.77463 18.6906 5.06088C17.5662 3.08214 15.7487 1.50714 13.6256 0.68401ZM10.4262 2.01276C12.7381 2.11776 14.9675 3.29651 16.3625 5.14151C17.4887 6.60526 18.0725 8.46964 17.9931 10.314C17.9313 12.129 17.2231 13.9121 16.0219 15.274C14.9019 16.5571 13.3606 17.4671 11.6931 17.8196C9.84937 18.2178 7.865 17.9484 6.20563 17.0478C4.66875 16.2259 3.41875 14.8846 2.70625 13.294C1.89813 11.5109 1.78312 9.42901 2.3775 7.56463C2.93813 5.78338 4.15063 4.21839 5.73313 3.22776C7.12 2.34589 8.78687 1.92339 10.4262 2.01276Z"
                            fill="white" fillOpacity="0.5"/>
                    </svg>

                    <input type="text"
                           className='h-auto w-full border-none text-[20px] placeholder-[#ffffff50] focus-visible:outline-none'
                           style={{background: 'none'}} value={searchText} placeholder='Search questions by key words...' onClick={() => {router.push('/search')}} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className='ml-auto flex items-center'>

                    <div className='px-2 py-2 bg-black relative mr-10 w-[340px]'>
                        <div className="relative z-10 flex items-center gap-2">
                            <RatingImage votes={userRank} width={34} height={34}/>
                            <p>{point} POINTS</p>
                        </div>

                        <div className={`absolute top-0 left-0 z-0 h-full`}
                             style={{width: `${percentRating}%`, background: 'linear-gradient(88.76deg, rgba(3, 247, 253, 0.4) 0.58%, rgba(125, 35, 203, 0.4) 98.96%)'}}/>
                    </div>

                    <div className="relative">
                        <button onClick={() => {
                            setIsNotification(true)
                            HandleDeleteNotification()
                        }}>
                            <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className='mr-4'>
                                <path
                                    d="M9.5675 1.04872C10.4794 0.826844 11.4925 1.35059 11.8412 2.22122C11.9769 2.54372 12.0306 2.90247 11.9737 3.24934C13.6969 3.70184 15.2369 4.77309 16.3 6.19872C17.2481 7.45684 17.8331 8.98434 17.9669 10.5543C18.0094 11.0131 17.9988 11.4743 18 11.9343C18.0006 14.6237 17.9988 17.3125 18.0006 20.0018C17.9844 20.4881 18.3775 20.9425 18.8625 20.9893C19.2406 21.0137 19.6206 20.9931 20 21C20 21.6668 20 22.3331 20 23C17.6044 23.0006 15.2087 22.9993 12.8137 23C13.0469 23.63 13.0588 24.3362 12.8344 24.9706C12.5213 25.8843 11.745 26.625 10.8131 26.8837C9.85 27.1681 8.75563 26.9093 8.01313 26.235C7.11313 25.4575 6.7525 24.1156 7.18625 23C4.79125 22.9993 2.39563 23.0006 0 23C0 22.3331 0 21.6668 0 21C0.35625 20.9962 0.7125 21.0068 1.06812 20.9956C1.4775 20.9825 1.85313 20.68 1.96063 20.2868C2.01438 20.0906 1.99812 19.8856 2 19.685C1.99937 17.0618 2 14.4381 2 11.815C2.0025 11.21 1.98187 10.6025 2.06312 10.0012C2.26875 8.32684 3.0325 6.73122 4.195 5.51059C5.22687 4.41997 6.56937 3.62059 8.02687 3.25434C7.85437 2.26309 8.58938 1.24309 9.5675 1.04872ZM5.36 7.18434C4.48187 8.24684 3.99562 9.62122 4.00062 10.9993C3.99937 13.8962 4 16.7937 4 19.6912C4.0175 20.1343 3.96688 20.5812 3.81375 21C7.93813 21 12.0619 21 16.1863 21C15.9363 20.3612 16.01 19.6681 16 18.9987C15.9987 16.3956 16.0025 13.7925 15.9981 11.1893C15.9838 8.87997 14.6275 6.60872 12.5406 5.58934C11.5462 5.08872 10.405 4.91684 9.30188 5.02559C7.77313 5.19622 6.32937 5.99122 5.36 7.18434ZM9.82375 23.015C9.33312 23.0868 8.95562 23.5725 9.0025 24.0656C9.0175 24.6025 9.53125 25.0506 10.065 24.9975C10.6038 24.9831 11.0506 24.4681 10.9975 23.9343C10.9837 23.3543 10.3887 22.8956 9.82375 23.015Z"
                                    fill="white"/>
                            </svg>
                        </button>


                        {isNotification && <div className="absolute right-0 top-[100%] 2xl:w-[400px] lg:w-[350px] py-6 px-2 bg-[#00000090] text-white z-20 flex flex-col items-end gap-2 max-h-[250px] overflow-y-scroll" ref={notificationRef}>
                            {notificationData ? notificationData.map((item:any) => (
                                <div key={item?.notificationId} className="flex flex-col gap-1 w-full">
                                    {/*header*/}
                                    <div className="flex justify-between items-center w-full">
                                        <h5 className="text-white 2xl:text-[20px] lg:text-[18px]">{item?.title}</h5>
                                        <p className="text-white 2xl:text-[14px] lg:text-[12px]">{dateFormation(item?.createdAt)}</p>
                                    </div>
                                    {/*main information*/}
                                    <div className="flex justify-between items-center w-full mb-1">
                                        <p className="text-white 2xl:text-[16px] lg:text-[14px]">{item?.description}</p>
                                    </div>
                                    <div className="h-[2px] bg-white w-full"/>
                                </div>

                            )) : null}

                        </div>}
                    </div>



                    <div className='relative'>
                        <button onClick={() => setIsProfile(old => !old)} >
                            {userImage? (<img src={userImage} alt='img-profile' className="rounded-full" width={45} height={45}/>) : (<img src='/profile.png' alt='img-profile' className="rounded-full" width={45} height={45}/>)}
                        </button>

                        {isProfile && <div className="absolute right-0 top-[100%] 2xl:w-[250px] lg:w-[200px] py-6 px-2 bg-black text-white z-20 flex flex-col items-end gap-2" ref={popupRef}>
                            <Link href='/profile' className="2xl:text-[18px] lg:text-[16px] text-white">Profile page</Link>
                            <Link href='/saved' className="2xl:text-[18px] lg:text-[16px] text-white">Saved questions</Link>
                            <button className="2xl:text-[18px] lg:text-[16px] text-white" onClick={() => setSettings(true)}>Settings</button>
                            <button className="2xl:text-[18px] lg:text-[16px] text-white" onClick={() => HandleLogOut()}>Log out</button>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    ) : null
}

export default Navbar
