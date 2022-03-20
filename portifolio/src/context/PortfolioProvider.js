import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [language, setLanguage] = useState('pt');
  const [showMenu, setShowMenu] = useState(false);


  const values = {
    setLanguage,
    language,
    setShowMenu,
    showMenu,
  }
  return (
    <PortfolioContext.Provider value={ values }>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;