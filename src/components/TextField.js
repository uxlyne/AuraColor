import React, { useState, useEffect } from 'react';
import './TextField.css';

const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Confused', 'Calm'];

const TextField = ({ onTextSubmit }) => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (text) {
      const filteredEmotions = emotions.filter(emotion =>
        emotion.toLowerCase().startsWith(text.toLowerCase())
      );
      setSuggestions(filteredEmotions);
    } else {
      setSuggestions([]);
    }
  }, [text]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onTextSubmit(text);
      setText('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onTextSubmit(suggestion);
    setText('');
    setSuggestions([]);
  };

  return (
    <div className="text-field-container">
      <form onSubmit={handleSubmit} className="text-field-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          className="text-field-input"
        />
        <button type="submit" className="text-field-submit">Enter</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextField;






