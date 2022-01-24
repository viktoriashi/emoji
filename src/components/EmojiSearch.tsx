import React from "react";
import EmojiRow from "./EmojiRow";
import { useState } from "react";
import Data from '../data/data.json'


interface EmojiSearchProps {
  input: string
  onChange(input: string): void
}

const EmojiSearch: React.FC<EmojiSearchProps> = (input) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      input.onChange(event.target.value)
      setTitle(event.target.value);
    }
     
    return (
        <div className="search-bar">
             <input type="text" value={title} placeholder="Enter Post Title" className="input-search" onChange={changeHandler}/>
             
        </div>
    )
}

export default EmojiSearch