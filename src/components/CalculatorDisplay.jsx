import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDisplay = ({ displayValue }) => (
  <>
    <h2>Your Math Magician Calculator</h2>
    <input type="text" value={displayValue} style={{ color: 'white' }} disabled />
  </>
);

CalculatorDisplay.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
