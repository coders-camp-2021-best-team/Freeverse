import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useUserDetails } from '../../../hooks';
import { routes } from '../../../routes/Routes';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../images/cookie.png';

import './Header.scss';

export const Header = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const handleOnImgClick = () =>
        setIsNavigationOpen((previousState) => !previousState);

    const user = useUser();
    const userDetails = useUserDetails(user.data.uid);

    if (userDetails.data?.data()) {
        return (
            <header className='nav__bar'>
                <NavLink to={`${routes.Feed}`}>
                    <Logo className='nav__bar__logo' />
                </NavLink>
                <div className='nav__bar__section'>
                    <UserInfo
                        userID={user.data.uid}
                        onClick={handleOnImgClick}
                    />
                    <Navigation
                        isOpen={isNavigationOpen}
                        username={userDetails.data.data().displayName}
                    />
                    <ImageComponent src={COOKIE} alt='' size='large' />
                </div>
            </header>
        );
    }
    return null;
};
