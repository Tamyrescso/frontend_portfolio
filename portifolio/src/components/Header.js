import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import darkLogo from '../images/logo_dark.svg';
import PortfolioContext from '../context/PortfolioContext';
import '../style/header.css';

function Header() {
  const { setLanguage, language } = useContext(PortfolioContext);

  function changeLanguage(e) {
    const { value } = e.target;
    setLanguage(value);
  }

  const ptHeader = (
    <nav className='navBar'>
      <Link to="/projects">
        <h3>Projetos</h3>
      </Link>
      <Link to="/abilities">
        <h3>Habilidades</h3>
      </Link>
      <Link to="/contact">
        <h3>Contato</h3>
      </Link>
    </nav>
  );

  const enHeader = (
    <nav className='navBar'>
      <Link to="/projects">
        <h3>Projects</h3>
      </Link>
      <Link to="/abilities">
        <h3>Abilities</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </nav>
  );

  return (
    <div className='headerBar'>
      <Link to="/">
        <img className='logo' src={darkLogo} alt="logo"/>
      </Link>
      {language === 'pt'? ptHeader : enHeader}
      <select onChange={ changeLanguage } className='languages'>
        <option value='pt'>PT-BR</option>
        <option value='en'>EN-EUA</option>
      </select>
    </div>
  )
}

export default Header;
