import React from 'react';
import { render } from '@testing-library/react';
import DisplayQuote from '../../components/displayQuote';

test('renders loader when isLoading is true', () => {
  const { container } = render(<DisplayQuote />);
  expect(container).toMatchSnapshot();
});

test('renders error message when error is not null', () => {
  const error = 'Failed To Load Quote';
  const { container } = render(<DisplayQuote error={error} />);
  expect(container).toMatchSnapshot();
});

test('renders quote and author when quote is not null', () => {
  const quote = [{ quote: 'Test Quote', author: 'Test Author' }];
  const { container } = render(<DisplayQuote quote={quote} />);
  expect(container).toMatchSnapshot();
});

test('renders "No Quote Found" when quote is null', () => {
  const { container } = render(<DisplayQuote quote={null} />);
  expect(container).toMatchSnapshot();
});
