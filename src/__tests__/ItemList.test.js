import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('removes a list item and updates count', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('count')).toHaveTextContent('1');
  fireEvent.click(getByTestId('removeButton'));
  expect(getByTestId('count')).toHaveTextContent('0');
})