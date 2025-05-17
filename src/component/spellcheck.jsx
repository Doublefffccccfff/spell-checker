import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SimpleSpellChecker = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSpellCheck = (text) => {
    const words = text.trim().split(" ");
    const fixedWords = [];
    const suggestionList = [];

    words.forEach((word) => {
      const lower = word.toLowerCase();
      if (customDictionary[lower]) {
        fixedWords.push(customDictionary[lower]);
        suggestionList.push(`Did you mean "${customDictionary[lower]}" for "${word}"?`);
      } else {
        fixedWords.push(word);
      }
    });

    setOutput(fixedWords.join(" "));
    setSuggestions(suggestionList);
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    handleSpellCheck(text);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h3>Spell Check and Auto-Correction</h3>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Enter text..."
        value={input}
        onChange={handleChange}
      />

      <div style={{ marginTop: "15px" }}>
        {suggestions.length > 0 && (
          <p style={{ color: "red" }}>
            Did you mean:{suggestions[0].split('"')[1]}?
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleSpellChecker;
