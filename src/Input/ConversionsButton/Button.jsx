import React from "react";
import style from "./Button.module.css";
function Button({ text, color, setInputText, inputText, fun }) {
  function Convert(fun) {
    alert(fun);
    if (fun == "uppercase") {
      setInputText(inputText.toUpperCase());
    } else if (fun == "lowercase") {
      setInputText(inputText.toLowerCase());
    } else if (fun == "clear") {
      setInputText("");
    } else if (fun == "copy") {
      navigator.clipboard.writeText(inputText);
    } else if (fun == "remove") {
      setInputText(inputText.replace(/\s+/g, " ").trim());
    }
  }
  return (
    <>
      <button
        className={style.btn}
        style={{ backgroundColor: color, borderRadius: "5px" }}
        onClick={() => Convert(fun)}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
