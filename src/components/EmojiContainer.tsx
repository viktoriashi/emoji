import React, { useState } from "react";
import EmojiRow from './EmojiRow'
import {IEmoji} from '../App'
import '../styles/emojiContainer.css'


interface EmojiContainerProps {
    title: string
    emojiList: Array<IEmoji>
    dropdown: number | undefined
}

const EmojiContainer: React.FC<EmojiContainerProps> = ({title, emojiList, dropdown}) => {
    return (
        <ul className="emoji-list">
            {emojiList.filter(emoji => {
                return ( emoji.title.toLowerCase().includes(title.toLowerCase()) || 
                           emoji.keywords.includes(title.toLowerCase())
                )
            }).slice(0, dropdown).map( item => {
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