import React from 'react';
import { render } from 'react-testing-library';
import App from './index';

const sum = (a, b) => a + b;

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello Next.js')).toBeInTheDocument();
});
