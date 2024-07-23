import React from 'react';
import './WordButton.css';

const WordButton = ({ word, onRemove }) => {
  return (
    <div className="word-button">
      {word}
      <button className="remove-button" onClick={() => onRemove(word)}>X</button>
    </div>
  );
};

export default WordButton;
