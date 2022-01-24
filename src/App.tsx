import React from 'react';
import logo from './logo.svg';
import EmojiSearch from './components/EmojiSearch';
import { useEffect, useState } from 'react';
import { render } from "react-dom";
import EmojiContainer from './components/EmojiContainer';


export interface IEmoji {
  title: string,
  symbol: HTMLImageElement,
  keywords: Array<string>
}

const App: React.FC = () => {

  // const [search, setSearch] = useState('');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IEmoji[]>([]);
      
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  const updateInput = async (input: string) => {
    const filtered = items.filter(emoji => {
      return ( emoji.title.toLowerCase().includes(input.toLowerCase()) || 
               emoji.keywords.includes(input.toLowerCase())
      )
    })
    setItems(filtered)
  }


  if (error) {
    return <div>Ошибка</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="wrapper">
        <EmojiSearch input='input' onChange={updateInput}></EmojiSearch>
        <EmojiContainer emojiList={items}></EmojiContainer>
        
      </div>
    );
  
  }

}


export default App;
