import React from 'react';
import './styles/App.css';
import { Calculator, DisplayQuote } from './components';

const App = () => (
  <div>
    <h1>Welcome Math Magicians</h1>
    <div className="wrapper">
      <Calculator />
      <DisplayQuote />
    </div>
  </div>
);

export default App;
