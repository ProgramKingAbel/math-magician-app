import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../../pages/Quote';

describe('Quote', () => {
  test('Quote Page is rendered and matches the snapshot', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
