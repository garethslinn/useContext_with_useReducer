import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

const setup = () => {
    const utils = render(<App />)
    const input = utils.getByTestId('addButton');
    return {
        input,
        ...utils,
    }
}
  
test('input should be empty before', () => {
    const { input } = setup()
    expect(input.value).toBe('') // empty before
})

test('can add new todo item', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'text content' } })
    expect(input.value).toBe('text content')
})

test('add button is disabled on launch', () => {
    const { getByTestId } = render(<App />)
    const input = getByTestId('addButton');
    expect(getByTestId('addButton')).toHaveAttribute('disabled');
})

test('button not disabled after adding text to input', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('inputItem');
    fireEvent.change(input, { target: { value: 'text content' } })
    expect(getByTestId('addButton')).not.toHaveAttribute('disabled');
})

test('add button disabled when trying to add an empty input value', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('inputItem');
    fireEvent.change(input, { target: { value: 'text content' } })
    fireEvent.click(getByTestId('addButton'));
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(getByTestId('addButton'));
    expect(getByTestId('addButton')).toHaveAttribute('disabled');
})
