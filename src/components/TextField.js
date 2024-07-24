import React, { useState } from 'react';
import './TextField.css';

const TextField = ({ onTextSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTextSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="text-field-container">
      <form className="text-field-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field-input"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TextField;










