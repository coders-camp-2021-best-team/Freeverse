import PropTypes from 'prop-types';
import { Text, ImageComponent } from '../..';
import PROFILE from '../../../images/profile.png';

import './UserInfo.scss';

export const UserInfo = ({ onClick, displayName, profilePictureUrl, customClass }) => {
    return (
        <div className={`user__info ${customClass}`}>
            <div className='user__info__image'>
                <ImageComponent
                    className='atom__image'
                    src={profilePictureUrl}
                    size='medium'
                    onClick={onClick}
                />
            </div>
            <Text type='primary' size='large' customClass='user__info__text'>
                {displayName}
            </Text>
        </div>
    );
};

UserInfo.propTypes = {
    onClick: PropTypes.func,
    displayName: PropTypes.string.isRequired,
    profilePictureUrl: PropTypes.string,
    customClass: PropTypes.string
};

UserInfo.defaultProps = {
    onClick: () => null,
    profilePictureUrl: PROFILE,
    customClass: ''
};
