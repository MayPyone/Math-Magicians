import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Test for Home components', () => {
  const { container } = render(<Home />);
  const headerElement = container.querySelector('.home');
  expect(headerElement).toBeInTheDocument();
});
