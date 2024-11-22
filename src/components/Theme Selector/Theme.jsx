import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css'; // Import CSS module for styling

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Apply the selected theme to the document body
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.toggleContainer}>
      <span className={styles.label}>{theme === 'light' ? '🌞' : '🌙'}</span>
      <div className={styles.toggleSwitch} onClick={toggleTheme}>
        <div
          className={
            theme === 'light' ? styles.toggleCircleLight : styles.toggleCircleDark
          }
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
