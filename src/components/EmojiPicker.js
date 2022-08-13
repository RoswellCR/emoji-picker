import { forwardRef, useState } from "react"
import { data as EmojiList } from "./data";
import EmojiSearch from "./EmojiSearch";

export function EmojiPicker(props, inputRef){
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(EmojiList);
    
    const handleSearch=(e)=>{
        const query = e.target.value.toLowerCase();
        if(!!query){ //si existe y no es vacio
            const search = EmojiList.filter( (emoji) => 
                emoji.name.includes(query) || emoji.keywords.includes(query));
                
                setEmojis(search);
        } else{
            setEmojis(EmojiList)
        }
        
    }

    function EmojiPickerContainer(){
        
        return (<div>
            <EmojiSearch onSearch={handleSearch}/>
            <div>
                {EmojiList.map((emoji)=>
                    <div key={emoji.symbol}>{emoji.symbol}</div>
                )}
            </div>
        </div>)
    }

    const handleClickOpen=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
        <button onClick={handleClickOpen}>🤖</button>
        {isOpen ? <EmojiPickerContainer/> : ""}
        </div>
    )
}

export default forwardRef(EmojiPicker);