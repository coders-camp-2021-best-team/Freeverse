// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../Images/logo.svg';
// import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import './NavBar.scss';

export const NavBar = () => {
    return (
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            {/* <UserInfo>Robert Klon</UserInfo> */}
            <Navigation />
            <ImageComponent
                src=''
                alt=''
                size='medium'
                onClick={() => console.log('jakiś tekst do cookies')}
            />
        </div>
    );
};

// NavBar.propTypes = {};
