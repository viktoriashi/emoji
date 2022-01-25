import React from "react";
import {IEmoji} from '../App'
import '../styles/emojiRow.css'


interface EmojiRowProps {
    emoji: IEmoji
}

const EmojiRow: React.FC<EmojiRowProps> = ({emoji}) => {    
    return (
        <li className="emoji-item">{emoji.symbol} {emoji.title}</li>
    )
}

export default EmojiRow