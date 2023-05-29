import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

type PostShort = {
    id: string,
    title: string,
    content: string,
    tags: string,
    answers: string,
    status: string
}

const PostShort = ({id, content, status, answers, tags, title}:PostShort) => {
    const [image64, setImage64] = useState<any>('/defaultQuestion.png')

    useEffect(() => {
        if(content){
            const json = JSON.parse(content)
            setImage64(json[2]?.image)
        }

    }, [])


    return(
        <Link href={`post/${id}`}>
            <div className="flex gap-4">
                <img src={image64} alt={`${id}-img`} className="object-cover" style={{height: 92}} width={160}
                       height={92}/>
                <div className="flex flex-col justify-between">
                    <h4 className="text-[22px] font-bold">{title}</h4>
                    <div className="flex justify-between gap-2">
                        {/*Tags*/}
                        <p className="font-light text-[17px] opacity-50">Tags: <span>{tags}</span>
                        </p>
                        {/*Answers*/}
                        <p className="font-light text-[17px] opacity-50">Answers: <span>{answers}</span>
                        </p>
                        {/*Status*/}
                        <p className="font-light text-[17px] opacity-50">{status}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostShort
