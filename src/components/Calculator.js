import React from 'react';
import '../styles/Calculator.css';

const CalculatorDisplay = () => (
  <>
    <h2>Your Math Magician Calculator</h2>
    <input type="text" placeholder={0} disabled />
  </>

);

const CalculatorButtons = () => {
  const buttons = [
    { id: 'ac', label: 'AC' },
    { id: 'plus-minus', label: '+/-' },
    { id: 'percent', label: '%' },
    { id: 'plus', label: '+' },
    { id: 'seven', label: '7' },
    { id: 'eight', label: '8' },
    { id: 'nine', label: '9' },
    { id: 'multiply', label: 'x' },
    { id: 'four', label: '4' },
    { id: 'five', label: '5' },
    { id: 'six', label: '6' },
    { id: 'minus', label: '-' },
    { id: 'one', label: '1' },
    { id: 'two', label: '2' },
    { id: 'three', label: '3' },
    { id: 'plus', label: '+' },
    { id: 'zero', label: '0', class: 'span-2' },
    { id: 'decimal', label: '.' },
    { id: 'equals', label: '=' },
  ];

  return (
    <div className="all-btns">
      {buttons.map((button) => (
        <button key={button.id} type="button" className={`grid-item ${button.class}`}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

const Calculator = () => (
  <div className="calc-container">
    <CalculatorDisplay />
    <CalculatorButtons />
  </div>
);

export default Calculator;
