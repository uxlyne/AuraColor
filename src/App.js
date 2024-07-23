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

  const handleTextSubmit = (text) => {
    setWords([...words, text]);
  };

  const handleRemoveWord = (word) => {
    setWords(words.filter(w => w !== word));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <div className="text-field-container">
          <h2>Aura Color Entry</h2>
          <TextField onTextSubmit={handleTextSubmit} />
          <ButtonList words={words} onRemove={handleRemoveWord} />
        </div>
        <Aura />
      </div>
      <Footer />
    </div>
  );
};

export default App;














