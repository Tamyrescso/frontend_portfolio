import React from 'react';
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
import '../style/abilities.css';

function Abilities() {
  return (
    <div className='abilities'>
        <Header/>
        <div className='mainAbilities'>
          <img id='cssCard' src={ css } alt='css logo and a ingredient' />
  
          <img id='githubCard' src={ github } alt='github logo and a ingredient' />
    
          <img id='htmlCard' src={ html } alt='html logo and a ingredient' />
    
          <img id='JSCard' src={ JS } alt='JS logo and a ingredient' />
  
          <img id='mysqlCard' src={ mySQL } alt='mysql logo and a ingredient' />
      
          <img id='nodeCard' src={ node } alt='node logo and a ingredient' />
      
          <img id='reactCard' src={ react } alt='react logo and a ingredient' />
      
          <img id='reduxCard' src={ redux } alt='redux logo and a ingredient' />
        </div>
        <Footer/>
    </div>
  )
}

export default Abilities;