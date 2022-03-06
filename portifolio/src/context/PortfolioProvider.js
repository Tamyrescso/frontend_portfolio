import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [language, setLanguage] = useState('pt');

  const values = {
    setLanguage,
    language,
  }
  return (
    <PortfolioContext.Provider value={ values }>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;