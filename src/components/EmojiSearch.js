import { useState } from "react";

export default function EmojiSearch({onSearch}){
    const [value, setValue] = useState('')
    
    const handleChange=(e)=>{
        const entry = e.target.value;
        setValue(entry);
        onSearch(e)
    }

    return <input type='text' onChange={handleChange} value={value}/>;
}