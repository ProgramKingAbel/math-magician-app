import React from 'react';
import './styles/App.css';
import { Calculator, displayQuote } from './components';

const App = () => (
  <div>
    <h1>Welcome Math Magicians</h1>
    <Calculator />
    <displayQuote />
  </div>
);

export default App;
