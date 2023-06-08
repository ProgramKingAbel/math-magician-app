import React, { useState } from 'react';
import '../styles/Calculator.css';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator = () => (

  <div className="calc-container">
    <CalculatorDisplay />
    <CalculatorButtons handleButtonClick={ handleButtonClick } />
  </div>
);

export default Calculator;
