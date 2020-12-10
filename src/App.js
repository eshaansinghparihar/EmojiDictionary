import React, { useState } from "react";
import './App.css';

const emojiDictionary ={
  "😀":"grinning face",
  "😃":"grinning face with open mouth",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":"annoyance",
  "😅":"grinning face with squinting eyes and sweat drop",
  "🤩":"face with starry eyes",
  "😒":"unamused face",

}

const emojis =Object.keys(emojiDictionary);

function App() {
  const [meaning,setMeaning]=useState("Translation will appear here..");
  const [emoji,setEmoji]=useState("");

  function emojiClickHandler(emojiClicked){
    setMeaning(emojiDictionary[emojiClicked])
  }

  function emojiInputHandler(event){
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if(inputEmoji in emojiDictionary)
  {
    setMeaning(emojiDictionary[inputEmoji])
  }
  else
  {
    setMeaning("Even we're trying to know the exact meaning of this emoji ! ")
  }
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={emojiInputHandler}
        value={emoji}
        placeholder={" Search your emoji here "}
        style={{
          padding: "1em",
          minWidth: "80%",
          margin: "1em",
        }} 
      />
      {
        emojis.map(emoji=>(
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
      <h2>{meaning}</h2>  
    </div>
  );
}

export default App;
