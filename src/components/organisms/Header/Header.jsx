import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/Routes';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../images/cookie.png';

import './Header.scss';

export const Header = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const handleOnImgClick = useCallback(
        () => setIsNavigationOpen((previousState) => !previousState),
        []
    );

    return (
        <header className='nav__bar'>
            <NavLink to={`${routes.Feed}`}>
                <Logo className='nav__bar__logo' />
            </NavLink>
            <div className='nav__bar__section'>
                <UserInfo onClick={handleOnImgClick} />
                <Navigation isOpen={isNavigationOpen} />
                <ImageComponent src={COOKIE} alt='' size='large' onClick />
            </div>
        </header>
    );
};
