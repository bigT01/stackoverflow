'use client';
import Image from "next/image";
import {UseMainContext} from "@/Context/MainContext";
import {useEffect, useState} from "react";
import axios from "@/axios";
import RatingImage from "@/Components/RatingImage";

const AnswerUserInfo = () => {
    const {userId, userRank} = UseMainContext()
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        axios.get(`api/users/${userId}`)
            .then(res => {setUserData(res.data)})
            .catch(res => {console.log(res.data)})
    }, [])


    return(
        <div className="flex gap-4 items-center">
            {/*user image*/}
            {userData?.ava ? <img src={userData?.ava} alt={`user-img`} className="rounded-full" width={71} height={71}/> :<img src={`/userPhoto.png`} alt={`user-img`} width={71} height={71}/>}
            {/*user information*/}
            <div className="flex flex-col gap-1">
                <h4 className="text-white font-bold 2xl:text-[24px] lg:text-[18px]">{userData?.username}</h4>

                <div className="flex gap-2 items-center">
                    <RatingImage votes={userRank} height={34} width={34}/>
                    <p className="text-white 2xl:text-[20px] lg:text-[16px]">{userRank} POINTS</p>
                </div>
            </div>
        </div>
    )
}

export default AnswerUserInfo
