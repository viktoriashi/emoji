import React from "react";
import EmojiRow from './EmojiRow'
import {IEmoji} from '../App'


interface EmojiContainerProps {
    emojiList: Array<IEmoji>
}

const EmojiContainer: React.FC<EmojiContainerProps> = ({emojiList}) => {
    
    return (
        <ul className="emoji-list">
            {emojiList.slice(0,15).map( item => {
                return (
                    <div key={item.title}>
                        <EmojiRow emoji={item}></EmojiRow>
                    </div>
                    
                )       
            })}
        </ul>
        
    )
}

export default EmojiContainer