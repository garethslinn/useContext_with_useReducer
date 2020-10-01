import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import AddItem from '../components/AddItem';

test('renders title', () => {
  const { getByTestId } = render(<App />);
  const title = getByTestId('title');
  expect(title).toHaveTextContent('Todo List');
});
