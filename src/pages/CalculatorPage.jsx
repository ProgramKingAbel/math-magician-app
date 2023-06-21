import React from 'react';
import { Calculator } from '../components';
import '../styles/App.css';

const CalculatorPage = () => (
  <div className="container">
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>Lets do some Math</h2>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
