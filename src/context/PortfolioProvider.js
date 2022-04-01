import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [language, setLanguage] = useState('pt');
  const [darkTheme, setDarkTheme] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  const values = {
    setLanguage,
    language,
    setShowMenu,
    showMenu,
    darkTheme,
    setDarkTheme,
  }
  return (
    <PortfolioContext.Provider value={ values }>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;