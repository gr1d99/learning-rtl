import { render, screen, } from '@testing-library/react';

import {Solution} from "../Solution";

describe('<Solution />', () => {
    test('renders provided value', () => {
        const solution = 1

        render(<Solution solution={solution} />)

        expect(screen.getByText(/Solution: 1/i)).toBeInTheDocument()
        expect(screen.queryByText(/Solution: 2/i)).not.toBeInTheDocument()
    })
});
