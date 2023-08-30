import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Testing included links', () => {
  const { getByText } = render(
      <App />
  );

  const homeLink = getByText('Home');
  const calculatorLink = getByText('Calculator');
  const quotesLink = getByText('Quotes');

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quotesLink).toBeInTheDocument();
});
