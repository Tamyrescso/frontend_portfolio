import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Abilities from './pages/Abilities';
import NotFound from './pages/NotFound';
import PortfolioContext from './context/PortfolioContext';
import './app.css';

function App() {
  const { darkTheme } = useContext(PortfolioContext);
  return (
    <div className={darkTheme? 'appDark' : 'appLight'}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/projects" element={ <Projects/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/abilities" element={ <Abilities/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
