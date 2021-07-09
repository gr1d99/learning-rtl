import { render, screen } from '@testing-library/react';

import { Input } from "../Input";

describe('<Input />', () => {
    test('it renders correct input label', () => {
        const props = {id: 1, label: 'Test Number 1'}

        render(<Input id={props.id} labelName={props.label}/>)

        const inputElement = screen.getByLabelText(props.label)

        expect(inputElement).toBeInTheDocument()
    })

    test('it renders correct input role', () => {
        const props = {id: 1, label: 'Test Number 1'}

        render(<Input {...props} />)

        expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    })
})
