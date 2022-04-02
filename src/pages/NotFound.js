import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.png';
import '../style/notFound.css';

function NotFound() {
  return (
    <div className='notFoundWrapper'>
      <img className='notFoundImg' src={notFound} alt="a figure of woman searching and not found something inside of a refrigerator, next to her there is a figure of a magnifying glass and the text '404 NOT FOUND' inside it"/>
      <Link to='/' className='backHomeLink'>
        <button className='backHome'>Home</button>
      </Link>
    </div>
  )
}

export default NotFound;