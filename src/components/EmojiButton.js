import emojiPicker from "./EmojiPicker";

export default function EmojiButton({emoji, onClick}){
    const handleClick=()=>{
        onClick(emoji)
    }
    
    return <button onClick={handleClick}>{emoji.symbol}</button>
}