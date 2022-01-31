// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../Images/logo.svg';
// import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../Images/cookie-min.jpg';

import './NavBar.scss';

export const NavBar = () => {
    return (
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            {/* <UserInfo>Robert Klon</UserInfo> */}
            <Navigation />
            {/* button to log out */}
            <ImageComponent
                src={COOKIE}
                alt=''
                size='medium'
                onClick={() => console.log('cos')}
            />
        </div>
    );
};

// NavBar.propTypes = {};
