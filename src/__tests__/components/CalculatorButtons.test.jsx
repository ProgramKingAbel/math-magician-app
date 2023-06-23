import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import CalculatorButtons from '../../components/CalculatorButtons';

test('renders CalculatorButtons component Correctly', () => {
  const tree = renderer.create(<CalculatorButtons handleClickedButton={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('handles button click correctly', () => {
  const handleClickedButton = jest.fn();
  const { getByText } = render(<CalculatorButtons handleClickedButton={handleClickedButton} />);

  const button = getByText('AC'); // Simulate clicking the 'AC' button
  fireEvent.click(button);

  expect(handleClickedButton).toHaveBeenCalledWith('AC'); // Assert that the handleClickedButton function was called with the expected button label
});
