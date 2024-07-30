import { useEffect, useState } from 'react'
import './App.css'
import Input from './Input/Input'
import Output from './Output/Output'
function App() {
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0); 
  const [character, setCharacter] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    function countWords() {
      let a=inputText.split(" ");
      setCount(a.length);
    }
    countWords();  
    function countCharacter() {
      setCharacter(inputText.length);
    }
    countCharacter();
  
    function countreadingTime() {
      setReadingTime(0.008 * inputText.length);
    }
    countreadingTime();

  },[inputText])

  // console.log(inputText);
  return (
    <>
      <Input inputText={inputText} setInputText={setInputText}/>
      <Output inputText={inputText} count={count} character={character} readingTime={readingTime}/>
    </>
  )
}

export default App
