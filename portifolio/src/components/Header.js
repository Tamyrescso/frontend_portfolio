import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import darkLogo from '../images/logo_dark.svg';
import PortfolioContext from '../context/PortfolioContext';
import brazil from '../images/brasil.png';
import usa from '../images/eua.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import MenuBurguer from './MenuBurguer';
import '../style/header.css';

function Header() {
  const {
    setLanguage,
    language,
    setShowMenu,
    showMenu } = useContext(PortfolioContext);

  function changeLanguage(e) {
    const { id } = e.target;
    setLanguage(id);
  }

  const ptHeader = (
    <nav className='navBar'>
      <Link to="/projects">
        <button>
          <span className='tech'>Projetos</span>
          <span className='food'>Receitas</span>
        </button>
      </Link>
      <Link to="/abilities">
        <button>
          <span className='tech'>Habilidades</span>
          <span className='food'>Ingredientes</span>
        </button>
      </Link>
      <Link to="/contact">
        <button>
          <span className='tech'>Contato</span>
          <span className='food'>Reserva</span>
        </button>
      </Link>
    </nav>
  );

  const enHeader = (
    <nav className='navBar'>
      <Link to="/projects">
        <button>
          <span className='tech'>Projects</span>
          <span className='food'>Recipes</span>
        </button>
      </Link>
      <Link to="/abilities">
        <button>
          <span className='tech'>Skills</span>
          <span className='food'>Ingredients</span>
        </button>
      </Link>
      <Link to="/contact">
        <button>
          <span className='tech'>Contact</span>
          <span className='food'>Reservation</span>
        </button>
      </Link>
    </nav>
  );

  return (
    <div className='headerBar'>
      { showMenu 
        ? (
          <button type='button' className='exitBtn' onClick={() => setShowMenu(false)}>
              <FontAwesomeIcon  icon={faXmark} />
            </button>
        )
        : (
            <button type='button' className='menuBtn' onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
        )
      }
      { showMenu && <MenuBurguer /> }
      <Link to="/">
        <img className='logo' src={darkLogo} alt="logo"/>
      </Link>
      {language === 'pt'? ptHeader : enHeader}
      <div className='languages'>
        <img onClick={ changeLanguage } id='pt' className='brazil' src={ brazil } alt='brazil flag'/>
        <img onClick={ changeLanguage } id='en' className='usa' src={ usa } alt='usa flag'/>
      </div>
    </div>
  )
}

export default Header;
