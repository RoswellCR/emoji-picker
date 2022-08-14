import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export default function EmojiInput(){
    const refInput = useRef(null);
    
    const handleClick=()=>{
        refInput.current.focus();
        refInput.current.value='';
    }

    return (
        <div>
            <input ref={refInput} />
            <button onClick={handleClick}>Clear</button>
            <EmojiPicker ref={refInput}/>
        </div>
        )
}