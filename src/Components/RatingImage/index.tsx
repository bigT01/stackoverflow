'use client';
import {useEffect, useState} from "react";
import Image from "next/image";

type RatingImageProps = {
    votes: number,
    width: number,
    height: number
}

const RatingImage = ({votes ,width, height, ...rest}: RatingImageProps) => {
    const [ratingImg, setRatingImg] = useState('/rating/rank0.png')
    const [alt, setAlt] = useState('rank0')

    useEffect(() => {
        if(votes > 2){
            setRatingImg('/rating/rank2.png')
            setAlt('rank2')
        }
        if(votes > 0 && votes < 2){
            setRatingImg('/rating/rank1.png')
            setAlt('rank1')
        }
    }, [])

    return(
        <Image src={ratingImg} alt={`${alt}-img`} width={width} height={height} {...rest}/>
    )
}

export default RatingImage
