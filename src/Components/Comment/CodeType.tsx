'use client';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import {UseMainContext} from "@/Context/MainContext";



const CodeType = () => {
    const {codeText, setCodeTexting} = UseMainContext()

    function onChange(newValue: any) {
        setCodeTexting(newValue);
    }

    return(
        <div className="bg-[#00000050] px-4 py-2 mt-5 h-[87%] relative" id={'UNIQUE_ID_OF_DIV'}>
            <div className="mb-2" />
            <AceEditor
                mode="python"
                theme="terminal"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                width="100%"
                height="250px"
                value={codeText}
            />
            <button className="px-4 py-2 h-fit absolute bottom-0 right-0"
                    style={{background: 'linear-gradient(88.76deg, #393939 0.58%, #4D4D4D 98.96%)'}}>
                <p className="text-white 2xl:text-[18px] lg:text-[16px] font-medium ">ANSWER</p>
            </button>
        </div>
    )
}

export default CodeType
