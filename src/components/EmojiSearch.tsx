import React from "react";
import EmojiRow from "./EmojiRow";
import { useState } from "react";
import Data from '../data/data.json'


interface EmojiSearchProps {
  input: string
  onChangeInput(input: string): void
}

const EmojiSearch: React.FC<EmojiSearchProps> = ({input, onChangeInput}) => {

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   input.onChange(event.target.value)
    //   setTitle(event.target.value);
    // }
     
    return (
        <div className="search-bar">
          <input type="text" value={input} placeholder="Enter Post Title" className="input-search" onChange={(e) => {onChangeInput(e.target.value)}}/>   
        </div>

      
    )
}

export default EmojiSearch