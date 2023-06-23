import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  test('displays correct value on button click', () => {
    const { getByRole, getByText } = render(<Calculator />);
    const displayElement = getByRole('textbox');

    // Simulate button clicks and assert display value updates accordingly
    fireEvent.click(getByText('1'));
    expect(displayElement).toHaveDisplayValue('1');

    fireEvent.click(getByText('+'));
    expect(displayElement).toHaveDisplayValue('1');

    fireEvent.click(getByText('5'));
    expect(displayElement).toHaveDisplayValue('5');

    fireEvent.click(getByText('='));
    expect(displayElement).toHaveDisplayValue('6');
  });
});
