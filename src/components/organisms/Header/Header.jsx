import { useState, useCallback } from 'react';
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
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            <div className='nav__bar__section'>
                <UserInfo onClick={handleOnImgClick} />
                <Navigation isOpen={isNavigationOpen} />
                <ImageComponent src={COOKIE} alt='' size='large' onClick />
            </div>
        </div>
    );
};
