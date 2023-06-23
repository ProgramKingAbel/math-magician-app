import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  test('renders the Navbar component', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
