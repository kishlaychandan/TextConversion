import React from "react";
import style from "./Output.module.css";
function Output({ count, character, readingTime ,inputText }) {
  return (
    <>
      <div className={style.output}>
        <h1>Summery Of Your Text</h1>
        <p>Number of words: {count}</p>
        <p>Number of charecters: {character}</p>
        <p>Reading Time: {0.008 * count}</p>
        <div>
          <h2>Preview Document</h2>
          <input type="text" value={inputText} />
        </div>
      </div>
    </>
  );
}

export default Output;
