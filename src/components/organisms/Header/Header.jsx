import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/Routes';
import { ImageComponent, Navigation, UserInfo, CookieModal } from '../..';
import { useUser } from '../../../hooks';
import { getRandomFortune } from '../../../utils/fortune';

import { ReactComponent as Logo } from '../../../images/logo.svg';
import COOKIE from '../../../images/cookie.png';

import './Header.scss';

export const Header = () => {
    const user = useUser();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [text, setText] = useState('');
    const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

    const toggleIsNavigationOpen = useCallback(
        () => setIsNavigationOpen((previousState) => !previousState),
        []
    );

    const handleOnCookieClick = useCallback(async () => {
        const data = await getRandomFortune();
        setText(data.fact);
        setIsCookieModalOpen(true);
    }, []);

    return (
        <header className='nav__bar'>
            <NavLink to={`${routes.Feed}`}>
                <Logo className='nav__bar__logo' />
            </NavLink>
            <div className='nav__bar__section'>
                <UserInfo
                    onClick={toggleIsNavigationOpen}
                    userID={user.data.uid}
                />
                <Navigation
                    isOpen={isNavigationOpen}
                    navItemCallback={toggleIsNavigationOpen}
                />
                <div className='cookie'>
                    <CookieModal
                        text={text}
                        isOpen={isCookieModalOpen}
                        setIsOpen={setIsCookieModalOpen}
                        searchAgain={handleOnCookieClick}
                    />
                </div>
                <ImageComponent
                    src={COOKIE}
                    alt=''
                    size='large'
                    customClass='nav__bar__section__imgcookie'
                    onClick={handleOnCookieClick}
                />
            </div>
        </header>
    );
};
