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

  const [title, setTitle] = useState<string>('')


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


  


  if (error) {
    return <div>Ошибка</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="wrapper">

        
        <div className="search-bar">
          <input type="text" value={title} placeholder="Enter Post Title" className="input-search" onChange={(e) => {setTitle(e.target.value); console.log(e.target.value)}}/>   
        </div>


        {/* <EmojiSearch input='input' onChange={updateInput}></EmojiSearch> */}
        <EmojiContainer title={title} emojiList={items}></EmojiContainer>
        
      </div>
    );
  
  }

}


export default App;
