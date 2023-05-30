import RatingImage from "@/Components/RatingImage";
import Link from "next/link";

type RatingUserProps = {
    rating: number,
    imgURL: string,
    nick: string,
    votes: number,
    id: string
}

const RatingUser = ({id, rating, imgURL, nick, votes}:RatingUserProps) => {
    return(
        <tr className='border-b-8 border-transparent hover:bg-[#11111170] px-4 py-2'>
            <td>{rating}</td>
            <td>
                <Link href={`/userProfile/${id}`} className='flex items-center'>
                    <img src={`${imgURL}`} alt={`${imgURL}-img`} width={42} height={42} className='mr-3 rounded-full'/>
                    <span>{nick}</span>
                </Link>
            </td>
            <td>{votes}</td>
            <td>
                <RatingImage votes={votes} width={40} height={40} className='m-0'/>
            </td>
        </tr>
    )
}

export default RatingUser
