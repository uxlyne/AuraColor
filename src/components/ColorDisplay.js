import React from 'react';
import './ColorDisplay.css';

const ColorDisplay = ({ color }) => {
  return (
    <div
      className="color-display"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorDisplay;

