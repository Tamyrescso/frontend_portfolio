import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown, faFaceLaughBeam, faSmile, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../style/alert.css';

function Alert({text, type}) {
  const { handleAlert, setHandleAlert } = useContext(PortfolioContext); 
  const handleClick = () => {
    if(handleAlert === 'closeAlert') {
      setHandleAlert('openAlert');
      return window.blur();
    }
    return setHandleAlert('closeAlert');
  }
  return (
    <div className={handleAlert} id={type === 'success'? 'success' : 'error' }>
      <span className='xIconAlert'onClick={handleClick}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <span className={ type === 'success'? 'faceIcon successIcon' : 'faceIcon errorIcon' }>
        <FontAwesomeIcon icon={ type === 'success'? faFaceLaughBeam : faFaceFrown } />
      </span>
      <h2 className='titleAlert'>
        {type === 'success'? 'SUCCESS!': 'ERROR!'}
      </h2>
      <p className='textAlert'>{text}</p>
    </div>
  )
}

export default Alert;