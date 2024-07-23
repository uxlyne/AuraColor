import React, { useState } from 'react';
import './TextField.css';

const TextField = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Type here..."
      className="text-field"
    />
  );
};

export default TextField;



