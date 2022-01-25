import React from "react";
import '../styles/emojiSearch.css'


interface EmojiSearchProps {
  input: string
  onChangeInput(input: string): void
}

const EmojiSearch: React.FC<EmojiSearchProps> = ({input, onChangeInput}) => {     
    return (
        <div className="search-bar">
          <input type="text" value={input} placeholder="Search the emoji..." className="input-search" onChange={(e) => {onChangeInput(e.target.value)}}/>   
        </div>
    )
}

export default EmojiSearch