import React, { useEffect, useState } from 'react';
import './EmotionDropdown.css';

const EmotionDropdown = ({ onSelectEmotion }) => {
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/emotions') // Adjust this URL to your backend API endpoint
      .then(response => response.json())
      .then(data => {
        setEmotions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching emotions:', error);
        setLoading(false);
      });
  }, []);

  const handleSelect = (event) => {
    const selectedEmotion = emotions.find(emotion => emotion.name === event.target.value);
    onSelectEmotion(selectedEmotion);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="emotion-dropdown-container">
      <label htmlFor="emotion-select" className="emotion-dropdown-label">Select Emotion</label>
      <select id="emotion-select" className="emotion-dropdown" onChange={handleSelect}>
        <option value="">Select Emotion</option>
        {emotions.map(emotion => (
          <option key={emotion.name} value={emotion.name}>
            {emotion.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmotionDropdown;







