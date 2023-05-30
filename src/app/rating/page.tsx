'use client';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {UseMainContext} from "@/Context/MainContext";
import RatingUser from "@/Components/RatingUsers/RatingUser";
import axios from "@/axios";
const Rating = () => {
    const router = useRouter()
    const {isAuth, setSearch} = UseMainContext()
    const [rank, setRank] = useState<any>()

    useEffect(() => {
        setSearch('')
        if (!isAuth) {
            router.push('/login')
        }
        if(isAuth){
            axios.get('api/users/rank')
                .then(res => setRank(res.data))
                .catch(err => console.log(err))
        }
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    return(
        <div className="w-full h-full">
            <section className='mx-auto w-full h-full relative ' style={{maxWidth: '95%'}}>
                <div className={"p-4 w-full 2xl:h-[80%] lg:h-[90%] bg-[#33333370] overflow-y-scroll mb-5"}>
                    <table className='w-full'>
                        <thead>
                        <tr className='text-left'>
                            <th className='w-10' />
                            <th>Name</th>
                            <th>Votes</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rank ? rank.map((rankItem: any, index: number) => (
                            <RatingUser key={rankItem.userId} rating={index+1} imgURL={rankItem?.ava ? `${rankItem?.ava}` : '/userPhoto.png'} nick={`@${rankItem?.username}`} votes={rankItem?.rank} id={rankItem?.userId} />
                        )) : null}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Rating
