import { themeOptions } from 'constants/constants';
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeOptions.Light);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themeOptions.Light ? themeOptions.Dark : themeOptions.Light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
