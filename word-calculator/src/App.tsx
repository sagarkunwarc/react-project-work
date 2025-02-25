import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInput = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setCount(input);

    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const characters = input.length;

    setWordCount(words);
    setCharacterCount(characters);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1>Word Calculator</h1>
        <input
          type="text"
          placeholder="Enter a word"
          onChange={handleInput}
          value={count}
        />
        <h2>Word Count: {wordCount}</h2>
        <h2>Character Count: {characterCount}</h2>
      </div>
    </div>
  );
}

export default App;
