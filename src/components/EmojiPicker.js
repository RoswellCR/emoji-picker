import { forwardRef, useState, useRef, useEffect } from "react"
import { data as EmojiList } from "./data";
import EmojiButton from "./EmojiButton";
import EmojiSearch from "./EmojiSearch";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(EmojiList);

  const containerRef = useRef(null);  

  useEffect(()=>{
      window.addEventListener('click', e =>{
          if(!containerRef.current.contains(e.target)) {
          //cuando el elem. al que se le da click no es padre de ningun elem. de la app
            setIsOpen(false);
            setEmojis(EmojiList);
        }
      })
  },[])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (!!query) {
      //si existe y no es vacio
      const search = EmojiList.filter(
        (emoji) => emoji.name.includes(query) || emoji.keywords.includes(query)
      );

      setEmojis(search);
    } else {
      setEmojis(EmojiList);
    }
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClickEmoji = (emoji) => {
      const cursorPos = inputRef.current.selectionStart;
      const text = inputRef.current.value;
      const prev = text.slice(0,cursorPos);
      const next = text.slice(cursorPos);
    
      inputRef.current.value = prev + emoji.symbol + next;
      inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
      inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
      inputRef.current.focus();
  };

  return (
    <div ref = {containerRef}>  
      <button onClick={handleClickOpen}>🤖</button>
      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch} />
          <div>
            {EmojiList.map((emoji) => (
              <EmojiButton
                key={emoji.keywords}
                emoji={emoji}
                onClick={handleOnClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);