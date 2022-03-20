import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpoon, faMugHot, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../style/footer.css';

function Footer() {
  const { language } = useContext(PortfolioContext);

  const enFooter = (
    <p className='textFooter'>
      Made with TWO <FontAwesomeIcon className='spoon' icon={faSpoon} /> JS,
      ONE <FontAwesomeIcon className='mug' icon={faMugHot} /> HTML
      and PLENTY of CSS! <FontAwesomeIcon className='heart' icon={faHeart} />
    </p>
  );

  const ptFooter = (
    <p className='textFooter'>
      Feito com DUAS <FontAwesomeIcon className='spoon' icon={faSpoon} /> de JS,
      UMA <FontAwesomeIcon className='mug' icon={faMugHot} /> de HTML
      e CSS a gosto! <FontAwesomeIcon className='heart' icon={faHeart} />
    </p>
  );

  return (
    <div className='footerBar'>
      {language === 'pt'? ptFooter : enFooter}
    </div>
  )
}

export default Footer;