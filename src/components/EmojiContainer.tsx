import React from "react";
import EmojiRow from './EmojiRow'
import {IEmoji} from '../App'


interface EmojiContainerProps {
    title: string
    emojiList: Array<IEmoji>
}

const EmojiContainer: React.FC<EmojiContainerProps> = ({title, emojiList}) => {
    
    

    return (
        <ul className="emoji-list">
            {emojiList.filter(emoji => {
                return ( emoji.title.toLowerCase().includes(title.toLowerCase()) || 
                           emoji.keywords.includes(title.toLowerCase())
                )
            }).slice(0,15).map( item => {
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