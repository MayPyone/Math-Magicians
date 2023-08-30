import React from 'react';
import { render } from '@testing-library/react';
import Calculates from './Calculator';

test('Test for Button group', () => {
  const { container } = render(<Calculates />);
  const headerElement = container.querySelector('h2');
  expect(headerElement).toBeInTheDocument();
});
