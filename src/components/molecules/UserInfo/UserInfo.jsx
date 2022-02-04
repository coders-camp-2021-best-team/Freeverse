import PropTypes from 'prop-types';
import { Text, ImageComponent } from '../..';
import PROFILE from '../../../images/profile.png';

import './UserInfo.scss';

export const UserInfo = ({ onClick, children }) => {
    return (
        <div className='userinfo'>
            <ImageComponent
                className='atom__image'
                src={PROFILE}
                size='medium'
                onClick={onClick}
            />
            <Text type='primary' size='large' customClass='userinfo__text'>
                {children}
            </Text>
        </div>
    );
};

UserInfo.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

UserInfo.defaultProps = {
    onClick: () => null
};
