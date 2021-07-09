import { render, screen } from '@testing-library/react';

import App from '../App';


describe('App', () => {
  test('renders calculator heading', () => {
    render(<App />);

    const linkElement = screen.getByText(/Calculator/i);

    expect(linkElement).toBeInTheDocument();
  });
})
