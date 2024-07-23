import React from 'react';

const EmotionDropdown = ({ onSelectEmotion }) => {
  const emotions = [
    {
      name: 'Happy',
      fillColor: 'rgba(255, 255, 0, 0.2)',
      rimBorderColor: 'rgba(255, 255, 0, 0.5)',
      borderType: 'solid',
      vibrancy: 9,
      texture: 'smooth',
      layerNumber: 2,
    },
    {
      name: 'Loving',
      fillColor: 'rgba(255, 105, 180, 0.2)',
      rimBorderColor: 'rgba(255, 105, 180, 0.5)',
      borderType: 'solid',
      vibrancy: 8,
      texture: 'smooth',
      layerNumber: 4,
    },
    // Add more emotions as needed
  ];

  const handleSelect = (event) => {
    const selectedEmotion = emotions.find(emotion => emotion.name === event.target.value);
    onSelectEmotion(selectedEmotion);
  };

  return (
    <select onChange={handleSelect}>
      <option value="">Select Emotion</option>
      {emotions.map(emotion => (
        <option key={emotion.name} value={emotion.name}>
          {emotion.name}
        </option>
      ))}
    </select>
  );
};

export default EmotionDropdown;






