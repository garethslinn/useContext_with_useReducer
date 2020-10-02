import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
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
    const app = render(<App />)
    expect(app.getByTestId('addButton')).toHaveAttribute('disabled');
})

test('button not disabled after adding text to input', () => {
    const app = render(<App />);
    const input = app.getByTestId('inputItem');
    const button = app.getByTestId('addButton');
    fireEvent.change(input, { target: { value: 'text content' } })
    expect(button).not.toHaveAttribute('disabled');
})

test('add button disabled when trying to add an empty input value', () => {
    const app = render(<App />);
    const input = app.getByTestId('inputItem');
    const button = app.getByTestId('addButton');
    fireEvent.change(input, { target: { value: 'text content' } })
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled');
})
