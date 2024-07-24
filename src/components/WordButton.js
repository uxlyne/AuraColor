import React from 'react';
import './WordButton.css';

const WordButton = ({ word, onRemove }) => {
  const colors = {
    Happy: 'rgba(255, 255, 0, 0.8)',
    Loving: 'rgba(255, 105, 180, 0.8)',
    // Add more emotions and their colors as needed
  };

  const fillColor = colors[word] || 'rgba(200, 200, 200, 0.8)'; // Default color

  return (
    <div className="word-button">
      <div className="color-orb" style={{ backgroundColor: fillColor }}></div>
      <span className="word-text">{word}</span>
      <button className="remove-button" onClick={() => onRemove(word)}>X</button>
    </div>
  );
};

export default WordButton;


