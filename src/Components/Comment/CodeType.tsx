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
        </div>
    )
}

export default CodeType
