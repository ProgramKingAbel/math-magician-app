import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home', () => {
  test('Home Page is rendered and matches the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
