import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Abilities from './pages/Abilities';
import NotFound from './pages/NotFound';
import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/projects" element={ <Projects/> } />
      <Route exact path="/contact" element={ <Contact/> } />
      <Route exact path="/abilities" element={ <Abilities/> } />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  );
}

export default App;
