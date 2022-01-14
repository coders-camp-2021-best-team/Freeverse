import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

describe('HelloWorld component', () => {
    render(<HelloWorld />);

    it('should render Text component', () => {
        const helloWorld = screen.getByText(/Hello World!/);

        expect(helloWorld).toBeInTheDocument();
    });
});
