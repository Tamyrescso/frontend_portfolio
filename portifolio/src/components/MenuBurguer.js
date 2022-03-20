import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import '../style/menuBurguer.css';

function MenuBurguer() {
  const { language, setShowMenu } = useContext(PortfolioContext);

    const ptMenu = (
      <nav className='navMenu'>
        <ul id='menu'> 
          <Link to="/" onClick={() => setShowMenu(false)}>
            <li>Início</li>
          </Link>
          <Link to="/projects" onClick={() => setShowMenu(false)}>
            <li>Projetos</li>
            <li>Receitas</li>
          </Link>
          <Link to="/abilities" onClick={() => setShowMenu(false)}>
            <li>Habilidades</li>
            <li>Ingredientes</li>
          </Link>
          <Link to="/contact" onClick={() => setShowMenu(false)}>
            <li>Contato</li>
            <li>Reserva</li>
          </Link>
        </ul>
      </nav>
    );
  
    const enMenu = (
      <nav className='navMenu'>
        <ul id='menu'> 
          <Link to="/" onClick={() => setShowMenu(false)}>
            <li>Home</li>
          </Link>
          <Link to="/projects" onClick={() => setShowMenu(false)}>
            <li>Projects</li>
            <li>Recipes</li>
          </Link>
          <Link to="/abilities" onClick={() => setShowMenu(false)}>
            <li>Skills</li>
            <li>Ingredients</li>
          </Link>
          <Link to="/contact" onClick={() => setShowMenu(false)}>
            <li>Contact</li>
            <li>Reservation</li>
          </Link>
        </ul>
      </nav>
    );

  return (
    <>
      { language === 'pt'? ptMenu : enMenu }
    </>
  )
}

export default MenuBurguer;