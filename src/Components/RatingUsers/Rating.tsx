'use client';
import RatingUser from "@/Components/RatingUsers/RatingUser";
import {useEffect, useState} from "react";
import axios from "@/axios";
import {UseMainContext} from "@/Context/MainContext";

const Rating = () => {
    const [rank, setRank] = useState<any>()
    const {isAuth} = UseMainContext()

    useEffect(() => {
        if(isAuth){
            // @ts-ignore
            axios.get('api/users/rank')
                .then(res => setRank(res.data))
                .catch(err => console.log(err))
        }

    }, [])

    return(
        <div className="p-4 w-full 2xl:h-[55%] lg:h-[42%] bg-[#33333370] overflow-y-scroll mb-5">
            <table className='w-full' >
                <thead>
                <tr className='text-left'>
                    <th className='w-8' />
                    <th>Name</th>
                    <th>Votes</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody >
                {rank ? rank.map((rankItem: any, index: number) => (
                    <RatingUser key={rankItem.userId} rating={index+1} imgURL={rankItem?.ava ? `${rankItem?.ava}` : '/userPhoto.png'} nick={`@${rankItem?.username}`} votes={rankItem?.rank} id={rankItem.userId} />
                )) : null}
                </tbody>
            </table>
        </div>
    )
}

export default Rating
