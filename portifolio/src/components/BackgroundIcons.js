import React from 'react';
import '../style/backgroundIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCarrot,
  faAppleWhole,
  faLemon,
  faBurger,
  faBeer,
  faCakeCandles,
  faChampagneGlasses,
  faCookie,
  faBreadSlice,
  faCheese,
  faDrumstickBite,
  faMartiniGlassCitrus,
  faWineBottle,
  faWhiskeyGlass,
  faPizzaSlice,
  faMugHot,
  faCandyCane,
} from '@fortawesome/free-solid-svg-icons';

function BackgroundIcons() {

  const iconRow = (
    <div className="row">
          <div>
            <FontAwesomeIcon className='icon'  icon={faCarrot} />
            <FontAwesomeIcon className='icon' icon={faMugHot} />
            <FontAwesomeIcon className='icon' icon={faAppleWhole} />
            <FontAwesomeIcon className='icon' icon={faBeer} />
            <FontAwesomeIcon className='icon' icon={faPizzaSlice} />
            <FontAwesomeIcon className='icon' icon={faCakeCandles} />
            <FontAwesomeIcon className='icon' icon={faLemon} />
            <FontAwesomeIcon className='icon' icon={faMartiniGlassCitrus} />
            <FontAwesomeIcon className='icon' icon={faBurger} />
            <FontAwesomeIcon className='icon' icon={faChampagneGlasses} />
            <FontAwesomeIcon className='icon' icon={faCandyCane} />
            <FontAwesomeIcon className='icon' icon={faBreadSlice} />
            <FontAwesomeIcon className='icon' icon={faWineBottle} />
            <FontAwesomeIcon className='icon' icon={faCookie} />
            <FontAwesomeIcon className='icon' icon={faWhiskeyGlass} />
            <FontAwesomeIcon className='icon' icon={faCheese} />
            <FontAwesomeIcon className='icon' icon={faDrumstickBite} />
          </div>
          <div>
            <FontAwesomeIcon className='icon' icon={faCarrot} />
            <FontAwesomeIcon className='icon' icon={faMugHot} />
            <FontAwesomeIcon className='icon' icon={faAppleWhole} />
            <FontAwesomeIcon className='icon' icon={faBeer} />
            <FontAwesomeIcon className='icon' icon={faPizzaSlice} />
            <FontAwesomeIcon className='icon' icon={faCakeCandles} />
            <FontAwesomeIcon className='icon' icon={faLemon} />
            <FontAwesomeIcon className='icon' icon={faMartiniGlassCitrus} />
            <FontAwesomeIcon className='icon' icon={faBurger} />
            <FontAwesomeIcon className='icon' icon={faChampagneGlasses} />
            <FontAwesomeIcon className='icon' icon={faCandyCane} />
            <FontAwesomeIcon className='icon' icon={faBreadSlice} />
            <FontAwesomeIcon className='icon' icon={faWineBottle} />
            <FontAwesomeIcon className='icon' icon={faCookie} />
            <FontAwesomeIcon className='icon' icon={faWhiskeyGlass} />
            <FontAwesomeIcon className='icon' icon={faCheese} />
            <FontAwesomeIcon className='icon' icon={faDrumstickBite} />
          </div>
          <div>
            <FontAwesomeIcon className='icon' icon={faCarrot} />
            <FontAwesomeIcon className='icon' icon={faMugHot} />
            <FontAwesomeIcon className='icon' icon={faAppleWhole} />
            <FontAwesomeIcon className='icon' icon={faBeer} />
            <FontAwesomeIcon className='icon' icon={faPizzaSlice} />
            <FontAwesomeIcon className='icon' icon={faCakeCandles} />
            <FontAwesomeIcon className='icon' icon={faLemon} />
            <FontAwesomeIcon className='icon' icon={faMartiniGlassCitrus} />
            <FontAwesomeIcon className='icon' icon={faBurger} />
            <FontAwesomeIcon className='icon' icon={faChampagneGlasses} />
            <FontAwesomeIcon className='icon' icon={faCandyCane} />
            <FontAwesomeIcon className='icon' icon={faBreadSlice} />
            <FontAwesomeIcon className='icon' icon={faWineBottle} />
            <FontAwesomeIcon className='icon' icon={faCookie} />
            <FontAwesomeIcon className='icon' icon={faWhiskeyGlass} />
            <FontAwesomeIcon className='icon' icon={faCheese} />
            <FontAwesomeIcon className='icon' icon={faDrumstickBite} />
          </div>
          <div>
            <FontAwesomeIcon className='icon' icon={faCarrot} />
            <FontAwesomeIcon className='icon' icon={faMugHot} />
            <FontAwesomeIcon className='icon' icon={faAppleWhole} />
            <FontAwesomeIcon className='icon' icon={faBeer} />
            <FontAwesomeIcon className='icon' icon={faPizzaSlice} />
            <FontAwesomeIcon className='icon' icon={faCakeCandles} />
            <FontAwesomeIcon className='icon' icon={faLemon} />
            <FontAwesomeIcon className='icon' icon={faMartiniGlassCitrus} />
            <FontAwesomeIcon className='icon' icon={faBurger} />
            <FontAwesomeIcon className='icon' icon={faChampagneGlasses} />
            <FontAwesomeIcon className='icon' icon={faCandyCane} />
            <FontAwesomeIcon className='icon' icon={faBreadSlice} />
            <FontAwesomeIcon className='icon' icon={faWineBottle} />
            <FontAwesomeIcon className='icon' icon={faCookie} />
            <FontAwesomeIcon className='icon' icon={faWhiskeyGlass} />
            <FontAwesomeIcon className='icon' icon={faCheese} />
            <FontAwesomeIcon className='icon' icon={faDrumstickBite} />
          </div>
        </div>
  )
  return (
    <section>
        {[1,2,3,4,5,6].fill(iconRow).map((row) => row)}
      </section>
  )
}

export default BackgroundIcons