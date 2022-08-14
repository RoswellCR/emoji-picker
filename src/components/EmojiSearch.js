import { useState } from "react";

export default function EmojiSearch({ onSearch }) {
  const [valueInp, setValueInp] = useState('');

  const handleChange = (e) => {
    //console.log(e.target.value);
    setValueInp(e.target.value);
    onSearch(e);
  };

  return <input type="text" onChange={handleChange} placeholder="search"/>;
}
