import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('button testing', () => {
    test('button is rendered', () => {
        render(<Button text='Test' />);
    });

    test('button is clickable', () => {
        // given
        const callback = jest.fn();
        render(<Button text='Test' onClick={callback} />);
        const btn = screen.getByRole('button');
        // when
        userEvent.click(btn);
        // then
        expect(callback).toBeCalled();
    });
});
