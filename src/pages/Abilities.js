import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  css,
  github,
  html,
  JS,
  mySQL,
  node,
  react,
  redux
} from '../images/skills/index.js';
import PortfolioContext from '../context/PortfolioContext';
import '../style/abilities.css';

function Abilities() {
  const { darkTheme } = useContext(PortfolioContext);
  return (
    <div className='abilities'>
        <Header/>
        <div className='mainAbilities'>
          <img
          className={darkTheme? 'darkCss cssCard' : 'cssCard' } src={ css } alt='css logo and a ingredient' />
  
          <img 
          className={darkTheme? 'darkGithub githubCard': 'githubCard' } src={ github } alt='github logo and a ingredient' />
    
          <img 
          className={darkTheme? 'darkHtml htmlCard' : 'htmlCard' } src={ html } alt='html logo and a ingredient' />
    
          <img 
          className={darkTheme? 'darkJS JSCard' : 'JSCard' } src={ JS } alt='JS logo and a ingredient' />
  
          <img 
          className={darkTheme? 'darkMysql mysqlCard' : 'mysqlCard' } src={ mySQL } alt='mysql logo and a ingredient' />
      
          <img 
          className={darkTheme? 'darkNode nodeCard' : 'nodeCard' } src={ node } alt='node logo and a ingredient' />
      
          <img 
          className={darkTheme? 'darkReact reactCard' : 'reactCard' } src={ react } alt='react logo and a ingredient' />
      
          <img 
          className={darkTheme? 'darkRedux reduxCard' : 'reduxCard' } src={ redux } alt='redux logo and a ingredient' />
        </div>
        <Footer/>
    </div>
  )
}

export default Abilities;