
type TagProps = {
    name: string
}

const Tag = ({name}: TagProps) => {
    return(
        <div
            className="py-2 flex-shrink-0 2xl:text-[24px] lg:text-[18px] px-6 bg-[#33333350] w-fit">{name}
        </div>
    )
}

export default Tag
