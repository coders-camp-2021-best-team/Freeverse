// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../images/logo.svg';
// import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../images/cookie.png';
import AVATAR from '../../../images/avatar.png';

import './NavBar.scss';

export const NavBar = () => {
    return (
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            {/* <UserInfo>Robert Klon</UserInfo> */}
            <div className='nav__bar__userinfo'>
                <img src={AVATAR} alt='' />
                <p>
                    Kamil
                    <br />
                    Kameleon
                </p>
            </div>
            <Navigation />
            {/* button to log out */}
            <ImageComponent
                src={COOKIE}
                alt=''
                size='large'
                onClick={() => console.log('cos')}
            />
        </div>
    );
};

// NavBar.propTypes = {};
