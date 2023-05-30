import Link from "next/link";

type TagProps = {
    name: string
}

const Tag = ({name}: TagProps) => {
    return(
        <Link href={`/tagPost/${name}`}
            className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] hover:bg-[#11111170] w-fit">{name}
        </Link>
    )
}

export default Tag
