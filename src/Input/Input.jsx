import React from "react";
import style from "./Input.module.css";
import Button from "./ConversionsButton/Button";
function Input({setInputText,inputText}) {
  return (
    <>
      <div className={style.Input}>
        <h1 className={style.heading}>
          TextUtis - Word Counter, Charecter Counter, Remove Extra Space
        </h1>
        <p>Enter text here</p>
        <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
        <div className={style.button}>
          <Button text="Convert uppercase" color="blue" fun="uppercase" inputText={inputText} setInputText={setInputText}/>
          <Button text="Convert Lowercase" color="blue" fun="lowercase" inputText={inputText} setInputText={setInputText}/>
          <Button text="Clear Text" color="red" fun="clear" inputText={inputText} setInputText={setInputText}/>
          <Button text="Copy To Clipboard" color="green" fun="copy" inputText={inputText} setInputText={setInputText}/>
          <Button text="Remove extra space" color="yellow" fun="remove" inputText={inputText} setInputText={setInputText}/>
        </div>
      </div>
    </>
  );
}

export default Input;
