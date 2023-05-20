import Tag from "@/Components/Tag/Tag";

const Tags = () => {
    return(
        <div className="p-6 flex flex-wrap bg-[#11111170] w-full gap-4">
            <Tag name={'java'}/>

            <Tag name={'javascript'}/>

            <Tag name={'php'}/>

            <Tag name={'sql'}/>

            <Tag name={'css'}/>

            <Tag name={'mysql'}/>

            <Tag name={'ios'}/>

            <Tag name={'django'}/>

            <Tag name={'swift'}/>

            <Tag name={'ruby'}/>

            <Tag name={'.net'}/>

        </div>
    )
}

export default Tags
