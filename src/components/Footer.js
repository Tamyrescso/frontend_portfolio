import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpoon, faMugHot, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../style/footer.css';

function Footer() {
  const { language } = useContext(PortfolioContext);

  const enFooter = (
    <p className='textFooter'>
      Made with TWO <FontAwesomeIcon className='spoon' icon={faSpoon} /> <b>JS</b>,
      ONE <FontAwesomeIcon className='mug' icon={faMugHot} /> <b>REACT</b> and PLENTY of <b>PURE CSS</b>! <FontAwesomeIcon className='heart' icon={faHeart} />
    </p>
  );

  const ptFooter = (
    <p className='textFooter'>
      Feito com DUAS <FontAwesomeIcon className='spoon' icon={faSpoon} /> de <b>JS</b>,
      UMA <FontAwesomeIcon className='mug' icon={faMugHot} /> de <b>REACT</b> e <b>CSS PURO</b> a gosto! <FontAwesomeIcon className='heart' icon={faHeart} />
    </p>
  );

  return (
    <div className='footerBar'>
      {language === 'pt'? ptFooter : enFooter}
    </div>
  )
}

export default Footer;