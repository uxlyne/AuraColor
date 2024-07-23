import React, { useState } from 'react';
import Header from './components/Header';
import Aura from './components/Aura';
import TextField from './components/TextField';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [color, setColor] = useState('');
  const [theme, setTheme] = useState('light');

  const handleTextChange = (text) => {
    const newColor = convertTextToColor(text);
    setColor(newColor);
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
          <TextField onTextChange={handleTextChange} />
        </div>
        <Aura />
      </div>
      <Footer />
    </div>
  );
};

const convertTextToColor = (text) => {
  // Implement your text-to-color conversion logic here
  return '#FFFFFF'; // Placeholder
};

export default App;












