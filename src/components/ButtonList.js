import React from 'react';
import WordButton from './WordButton';
import './ButtonList.css';

const ButtonList = ({ words, onRemove }) => {
  return (
    <div className="button-list-container">
      <div className="button-list">
        {words.map((word, index) => (
          <WordButton key={index} word={word} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;



