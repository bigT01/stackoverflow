import Tag from "@/Components/Tag/Tag";
import {useEffect, useState} from "react";
import {UseMainContext} from "@/Context/MainContext";
import axios from "@/axios";

const Tags = () => {
    const [tags, setTags] = useState<any>()
    const {isAuth} = UseMainContext()

    useEffect(() => {
        if(isAuth){
            // @ts-ignore
            axios.get('api/tags/getAllTags')
                .then(res => setTags(res.data))
                .catch(err => console.log(err))
        }

    }, [])

    return(
        <div className="p-6 flex flex-wrap bg-[#11111170] w-full gap-4">

            {tags ? tags.map((tagsItem: any) => (<Tag key={tagsItem?.tagId} name={tagsItem?.name}/>)): null}

        </div>
    )
}

export default Tags
