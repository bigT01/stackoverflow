import RatingUser from "@/Components/RatingUsers/RatingUser";

const Rating = () => {
    return(
        <div className="p-4 w-full 2xl:h-[55%] lg:h-[42%] bg-[#33333370] overflow-y-scroll mb-5">
            <table className='w-full'>
                <thead>
                <tr className='text-left'>
                    <th className='w-8'></th>
                    <th>Name</th>
                    <th>Votes</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>

                <RatingUser rating={1} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={2} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={3} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={4} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={5} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={6} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={7} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={8} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={9} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={10} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={11} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />
                <RatingUser rating={12} imgURL={'/userPhoto.png'} nick={'@diasnkteam'} votes={980} ratingIMGURL={'/rank0.png'} />

                </tbody>
            </table>
        </div>
    )
}

export default Rating
