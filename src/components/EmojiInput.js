import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export default function EmojiInput(){
    const refInput = useRef(null);
    
    const handleClick=()=>{
        refInput.current.focus();
    }

    return (
        <div>
            <input ref={refInput} />
            <button onClick={handleClick}>Button</button>
            <EmojiPicker ref={refInput}/>
        </div>
        )
}