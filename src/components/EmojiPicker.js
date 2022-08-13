import { forwardRef, useState } from "react"
import { data as EmojiList } from "./data";

export function EmojoPicker(props, inputRef){
    const [isOpen, setIsOpen] = useState(true);
    const [emojis, setEmojis] = useState(EmojiList);
    
    function EmojiPickerContainer(){
        return (<div>
            <input/>
            <div>
                {EmojiList.map((emoji)=>
                    <div>{emoji.symbol}</div>
                )}
            </div>
        </div>)
    }

    return (
        <div>
        <button>🤖</button>
        {isOpen ? <EmojiPickerContainer/> : ""}
        </div>
    )
}

export default forwardRef()