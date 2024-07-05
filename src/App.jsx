import React, { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <label className="switch toggle-mode">
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <MultiStepForm />
    </div>
  );
}

export default App;
