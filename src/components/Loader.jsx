import React from 'react';
import loader from '../assets/loader.svg';
import '../styles/Loader.css';

const Loader = () => (
  <div className="loader">
    <img src={loader} alt="loader" className="loader-img" />
    <p className="loader-tag">
      We are getting you a quote
      <br />
      Please wait...
    </p>
  </div>
);

export default Loader;
