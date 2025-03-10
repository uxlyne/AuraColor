import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Aura from './components/Aura';
import TextField from './components/TextField';
import ButtonList from './components/ButtonList';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [words, setWords] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const [layers, setLayers] = useState({
    layer1: {
      fillColor: 'rgba(255, 0, 150, 0.2)',
      rimBorderColor: 'rgba(255, 0, 150, 0.5)',
      borderType: 'solid',
      vibrancy: 8,
      texture: 'smooth',
    },
    layer2: {
      fillColor: 'rgba(0, 150, 255, 0.2)',
      rimBorderColor: 'rgba(0, 150, 255, 0.5)',
      borderType: 'solid',
      vibrancy: 6,
      texture: 'rough',
    },
    layer3: {
      fillColor: 'rgba(150, 255, 0, 0.2)',
      rimBorderColor: 'rgba(150, 255, 0, 0.5)',
      borderType: 'diffusing',
      vibrancy: 5,
      texture: 'smooth',
    },
    layer4: {
      fillColor: 'rgba(255, 0, 150, 0.2)',
      rimBorderColor: 'rgba(255, 0, 150, 0.5)',
      borderType: 'diffusing',
      vibrancy: 7,
      texture: 'rough',
    },
  });

  useEffect(() => {
    fetch('http://localhost:5001/api/emotions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched emotions:', data); // Debug statement
        setEmotions(data);
      })
      .catch(error => {
        console.error('Error fetching emotions:', error);
      });
  }, []);

  const handleTextSubmit = (text) => {
    const emotion = emotions.find(e => e.name === text);
    if (emotion) {
      updateLayer(emotion);
      setWords([...words, text]);
    } else {
      console.error('Emotion not found');
    }
  };

  const handleRemoveWord = (word) => {
    setWords(words.filter(w => w !== word));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const updateLayer = (emotion) => {
    const layer = `layer${emotion.layerNumber}`;
    setLayers(prevLayers => ({
      ...prevLayers,
      [layer]: { ...prevLayers[layer], ...emotion },
    }));
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <div className="interaction-container">
          <div className="text-field-container">
            <h2>Choose Your Emotional Palette</h2>
            <TextField onTextSubmit={handleTextSubmit} />
            <ButtonList words={words} onRemove={handleRemoveWord} />
          </div>
        </div>
        <Aura layers={layers} />
      </div>
      <Footer />
    </div>
  );
};

export default App;


























