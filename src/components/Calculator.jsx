import React, { useState } from 'react';
import '../styles/Calculator.css';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';
import calculate from '../utils/calculate';

const Calculator = () => {
 
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null
  });

  
  const handleClickedButton = (buttonName) => {
    const updatedData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedData);
  }

  <div className="calc-container">
    <CalculatorDisplay />
    <CalculatorButtons handleClickedButton={ handleClickedButton } />
  </div>
};

export default Calculator;
