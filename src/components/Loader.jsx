import React from 'react';
import loader from '../assets';

const Loader = () => {
  return (
      <div className='loader'>
          <img src={loader} alt="loader" className='loader-img' />
          <p>We are getting you a quote <br />
              Please wait...</p>
    </div>
  )
}

export default Loader