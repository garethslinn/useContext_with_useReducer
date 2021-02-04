import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

const setup = () => {
    const app = render(<App />)
    const input = app.getByTestId('inputItem');
    const button = app.getByTestId('addButton');
    return {
        input,
        button,
        app
    }
}

describe('the todo list works as expected', () => {

    it('has the correct default value', () => {
        render(<App />)
        const listItem0 = screen.getByTestId('listItem-0');
        expect(listItem0).toHaveTextContent('testing')
    })

    it('has the correct default count value', () => {
        render(<App />)
        const count = screen.getByTestId('count');
        expect(count).toHaveTextContent('1')
    })

    it('should have an empty input before', () => {
        const { input } = setup();
        expect(input.value).toBe('') // empty before
    })

    it('can add new todo item', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'text content' } });
        expect(input.value).toBe('text content')
    })

    it('add button is disabled on launch', () => {
        const { button } = setup();
        expect(button).toHaveAttribute('disabled');
    })

    it('button not disabled after adding text to input', () => {
        const { input, button } = setup();
        fireEvent.change(input, { target: { value: 'text content' } });
        expect(button).not.toHaveAttribute('disabled');
    })

    it('add button disabled when trying to add an empty input value', () => {
        const { input, button } = setup();
        fireEvent.change(input, { target: { value: 'text content' } });
        fireEvent.click(button);
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(button);
        expect(button).toHaveAttribute('disabled');
    })

})



