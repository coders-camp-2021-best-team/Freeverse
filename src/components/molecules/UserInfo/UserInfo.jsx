import PropTypes from 'prop-types';
import { Text, ImageComponent } from '../..';
import PROFILE from '../../../images/profile.png';

import './UserInfo.scss';

export const UserInfo = ({ children }) => {
    return (
        <div className='userinfo'>
            <ImageComponent src={PROFILE} size='medium' />
            <Text customClass='userinfo__text' type='primary' size='large'>{children}</Text>
        </div>
    );
};

UserInfo.propTypes = {
    children: PropTypes.string.isRequired,
};
