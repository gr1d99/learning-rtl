import { render, screen, fireEvent } from '@testing-library/react';

import {Operation} from "../Operation";

import {SUBTRACT} from "../../constants";

describe('<Operation />', () => {
    test('renders correct label', () => {
        render(<Operation />)

        const element = screen.getByLabelText('Operation')

        expect(element).toBeInTheDocument()

    });

    test('renders all options', () => {
        const { getByTestId, getAllByTestId } = render(<Operation />)

        const element = getByTestId('op-select')

        fireEvent.change(element, { target: { value: SUBTRACT }})

        const options = getAllByTestId('op-select-option')

        expect(element).toBeInTheDocument()
        expect(options).toHaveLength(2)
        expect(options[0].selected).toBeFalsy()
        expect(options[1].selected).toBeTruthy()

    })
});
