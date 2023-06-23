import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorDisplay from '../../components/CalculatorDisplay';

test('Display of the Calculator renders correctly', () => {
  const tree = renderer.create(<CalculatorDisplay displayValue="100" />).toJSON();
  expect(tree).toMatchSnapshot();
});
