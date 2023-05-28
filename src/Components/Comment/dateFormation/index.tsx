'use client';

import {useEffect, useState} from "react";

type DateFormationProps = {
    createdAt: string
}

const DateFormation = ({createdAt}: DateFormationProps) => {
    const [date, setDate] = useState<string>('')

    useEffect(() => {
        // formatting date to in design
        const dateString = createdAt;
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        const hour = date.getHours().toString().padStart(2, "0");
        const minute = date.getMinutes().toString().padStart(2, "0");

        const formattedDate = `${day}.${month}.${year} ${hour}:${minute}`;

        setDate(formattedDate)
    }, [])

    return(
        <p className="text-[#82868D] 2xl:text-[16px] lg: text-[14px]">{date}</p>
    )
}

export default DateFormation
