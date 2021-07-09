import { render, screen, fireEvent } from '@testing-library/react';

import { Calculator } from "../Calculator";
import {ADD} from "../../constants";

describe('<Calculator />', () => {
    beforeEach(() => {
        render(<Calculator />)
    })

    test('first input changes correctly', () => {
        const element = screen.getByTestId('num1')
        fireEvent.change(element, { target: { value: 1 } })

        expect(element).toBeInTheDocument()
        expect(element.value).toBe("1")
        expect(element.value).not.toBe("2")
    })

    test('second input changes correctly', () => {
        const element = screen.getByTestId('num2')
        fireEvent.change(element, { target: { value: 1 } })

        expect(element).toBeInTheDocument()
        expect(element.value).toBe("1")
        expect(element.value).not.toBe("2")
    })

    test('arithmetic operation is selected correctly', () => {
        const selectElement = screen.getByTestId('op-select')
        fireEvent.change(selectElement, { target: { value: ADD } })

        const options = screen.getAllByTestId('op-select-option');

        expect(selectElement).toBeInTheDocument()
        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).not.toBeTruthy()
    })

    test('correct solution is displayed', () => {
        const firstNumberElement = screen.getByTestId('num1')
        fireEvent.change(firstNumberElement, { target: { value: 1 } })

        const secondNumberElement = screen.getByTestId('num2')
        fireEvent.change(secondNumberElement, { target: { value: 1 } })

        const selectElement = screen.getByTestId('op-select')
        fireEvent.change(selectElement, { target: { value: ADD } })

        const solutionElement = screen.getByTestId('solution')

        expect(solutionElement).toHaveTextContent('Solution: 2')
        expect(solutionElement).not.toHaveTextContent('Solution: 0')
    })
})