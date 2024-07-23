import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="toggle" className="toggle-label">
        <div className="toggle-switch">
          <div className="toggle-icon sun"></div>
          <div className="toggle-icon moon"></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;













