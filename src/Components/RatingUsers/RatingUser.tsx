import RatingImage from "@/Components/RatingImage";

type RatingUserProps = {
    rating: number,
    imgURL: string,
    nick: string,
    votes: number,
    ratingIMGURL: string
}

const RatingUser = ({rating, imgURL, nick, votes, ratingIMGURL}:RatingUserProps) => {
    return(
        <tr className='border-b-8 border-transparent'>
            <td>{rating}</td>
            <td className='flex items-center'><img src={`${imgURL}`} alt={`${imgURL}-img`}
                                                     width={42} height={42} className='mr-3 rounded-full'/>
                <span>{nick}</span></td>
            <td>{votes}</td>
            <td>
                <RatingImage votes={votes} width={40} height={40} className='m-0'/>
            </td>
        </tr>
    )
}

export default RatingUser
