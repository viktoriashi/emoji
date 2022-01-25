import React from 'react';
import EmojiSearch from './components/EmojiSearch';
import { useEffect, useState } from 'react';
import EmojiContainer from './components/EmojiContainer';
import DropdownRows from './components/DropdownRows';


export interface IEmoji {
  title: string,
  symbol: HTMLImageElement,
  keywords: Array<string>
}

const App: React.FC = () => {

  const [input, setInput] = useState<string>('')
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IEmoji[]>([]);
  const [dropdown, setDropdown] = useState<number>()

      
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  function changeInput(inputTitle: string) {
    setInput(inputTitle)
  }

  function changeRowsNumber(dropdown: number) {
    setDropdown(dropdown)
  }

  if (error) {
    return <div>Ошибка</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="wrapper">    
        <div className='emoji-container'>
          <EmojiSearch input={input} onChangeInput={changeInput}></EmojiSearch>
          <EmojiContainer title={input} emojiList={items} dropdown={dropdown}></EmojiContainer>
        </div>
        <DropdownRows onChangeRowsNumber={changeRowsNumber}></DropdownRows>
      </div>
    );
  
  }

}


export default App;
