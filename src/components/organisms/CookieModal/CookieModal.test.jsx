import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CookieModal } from './CookieModal';

describe('cookieModal testing', () => {
    test('CookieModal is rendered', () => {
        const setIsOpen = jest.fn();
        const searchAgain = jest.fn();
        render(
            <CookieModal
                isOpen
                text='Cookie text'
                setIsOpen={setIsOpen}
                searchAgain={searchAgain}
            />
        );
        const searchAgainBtn = screen.getByRole('button', {
            name: /Search again/
        });
        expect(searchAgainBtn).toBeInTheDocument();
    });
    test('CookieModal setIsOpen is working', () => {
        // given
        const setIsOpen = jest.fn();
        const searchAgain = jest.fn();
        render(
            <CookieModal
                isOpen
                text='Cookie text'
                setIsOpen={setIsOpen}
                searchAgain={searchAgain}
            />
        );
        const closeBtnIcon = screen.getByTestId('icon-element');
        // when
        userEvent.click(closeBtnIcon);
        // then
        expect(setIsOpen).toBeCalled();
    });
    test('CookieModal SearchAgainBtn is working', () => {
        // given
        const setIsOpen = jest.fn();
        const searchAgain = jest.fn();
        render(
            <CookieModal
                isOpen
                text='Cookie text'
                setIsOpen={setIsOpen}
                searchAgain={searchAgain}
            />
        );
        const searchAgainBtn = screen.getByRole('button', {
            name: /Search again/
        });
        // when
        userEvent.click(searchAgainBtn);
        // then
        expect(searchAgain).toBeCalled();
    });
});
