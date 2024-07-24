import React, { useState } from 'react';
import Header from './components/Header';
import Aura from './components/Aura';
import TextField from './components/TextField';
import ButtonList from './components/ButtonList';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [color, setColor] = useState('');
  const [theme, setTheme] = useState('light');
  const [words, setWords] = useState([]);

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

  const emotions = {
    Happy: {
      fillColor: 'rgba(255, 255, 0, 0.2)',
      rimBorderColor: 'rgba(255, 255, 0, 0.5)',
      borderType: 'solid',
      vibrancy: 9,
      texture: 'smooth',
      layerNumber: 2,
    },
    Loving: {
      fillColor: 'rgba(255, 105, 180, 0.2)',
      rimBorderColor: 'rgba(255, 105, 180, 0.5)',
      borderType: 'solid',
      vibrancy: 8,
      texture: 'smooth',
      layerNumber: 4,
    },
    // Add more emotions as needed
  };

  const handleTextSubmit = (text) => {
    const emotion = emotions[text];
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
















