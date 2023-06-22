import React from 'react';
import { render } from '@testing-library/react';
import CalculatorPage from '../../pages/CalculatorPage';

describe('CalculatorPage', () => {
  test('Renders CalculatorPage and matches the snapshot', () => {
    const { container } = render(<CalculatorPage />);
    expect(container).toMatchSnapshot();
  });
});
