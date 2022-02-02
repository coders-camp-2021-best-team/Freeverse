import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { ReactComponent as Logo } from '../../../images/logo.svg';
// import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../images/cookie.png';
import AVATAR from '../../../images/avatar.png';

import './NavBar.scss';

const Placeholder = ({ onClick }) => {
    return (
        <button className='nav__bar__userinfo' onClick={onClick}>
            <img src={AVATAR} alt='' />
            <p className='p navp'>
                Kamil
                <br />
                Kameleon
            </p>
        </button>
    );
};
Placeholder.propTypes = {
    onClick: PropTypes.func
};
Placeholder.defaultProps = {
    onClick: () => null
};

export const NavBar = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const handleOnImgClick = useCallback(
        () => setIsNavigationOpen((previousState) => !previousState),
        []
    );

    return (
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            {/* <UserInfo>Robert Klon</UserInfo> */}
            <Placeholder onClick={handleOnImgClick} />
            <Navigation isOpen={isNavigationOpen} />
            {/* button to log out */}
            <ImageComponent
                src={COOKIE}
                alt=''
                size='large'
                onClick={handleOnImgClick}
            />
        </div>
    );
};

// NavBar.propTypes = {};
