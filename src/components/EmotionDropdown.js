import React from 'react';
import './EmotionDropdown.css';

const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Confused', 'Calm'];

const EmotionDropdown = ({ onSelectEmotion }) => {
  return (
    <div className="emotion-dropdown-container">
      <label className="emotion-dropdown-label" htmlFor="emotionDropdown">Select Emotion</label>
      <select
        id="emotionDropdown"
        onChange={(e) => onSelectEmotion(e.target.value)}
        className="emotion-dropdown"
      >
        <option value="">Select Emotion</option>
        {emotions.map((emotion, index) => (
          <option key={index} value={emotion}>{emotion}</option>
        ))}
      </select>
    </div>
  );
};

export default EmotionDropdown;




