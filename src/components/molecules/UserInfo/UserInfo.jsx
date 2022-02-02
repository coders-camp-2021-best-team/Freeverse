import PropTypes from 'prop-types';
import { Text, ImageComponent } from '../..';
import PROFILE from '../../../images/profile.png';

import './UserInfo.scss';

export const UserInfo = ({ children }) => {
    return (
        <div className='userinfo'>
            <ImageComponent className='atom__image' src={PROFILE} size='medium' />
            <Text type='primary' size='large'>
                {children}
            </Text>
        </div>
    );
};

UserInfo.propTypes = {
    children: PropTypes.string.isRequired
};
