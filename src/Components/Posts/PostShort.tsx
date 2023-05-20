import Image from "next/image";
import Link from "next/link";

type PostShort = {
    id: string,
    title: string,
    imageURL: string,
    tags: string,
    answers: string,
    status: string
}

const PostShort = ({id, imageURL, status, answers, tags, title}:PostShort) => {
    return(
        <Link href={`post/${id}`}>
            <div className="flex gap-3">
                <Image src={imageURL} alt={`${imageURL}-img`} width={160}
                       height={92}/>
                <div>
                    <h4 className="text-[22px] font-bold">{title}</h4>
                    <div className="flex justify-between">
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
