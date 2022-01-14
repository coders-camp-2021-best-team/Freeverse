import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter component', () => {
    render(<Counter initValue={0} minValue={0} maxValue={10} />);

    const decrease_btn = screen.getByText(/Decrease!/);
    const increase_btn = screen.getByText(/Increase!/);
    const counter_state = screen.getByText(/Counter: /);

    expect(decrease_btn).toBeInTheDocument();
    expect(increase_btn).toBeInTheDocument();
    expect(counter_state).toBeInTheDocument();

    it('should decrease counter on click', () => {
        decrease_btn.click();

        expect(counter_state.innerHTML).toEqual(
            `Counter: ${Counter.defaultProps.initValue}`
        );

        increase_btn.click();
    });

    it('should increase counter on click', () => {
        increase_btn.click();

        expect(counter_state.innerHTML).toEqual(
            `Counter: ${Counter.defaultProps.initValue + 1}`
        );

        decrease_btn.click();
    });
});
