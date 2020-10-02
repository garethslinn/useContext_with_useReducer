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