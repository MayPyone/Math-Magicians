import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

test('Test for Home components', () => {
  const { container } = render(<Quote />);
  const headerElement = container.querySelector('.quotes');
  expect(headerElement).toBeInTheDocument();
});
