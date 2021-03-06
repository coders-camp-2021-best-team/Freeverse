import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Text, ImageComponent } from '../..';
import { useUserDetails } from '../../../hooks';
import { routes } from '../../../routes/Routes';

import './UserInfo.scss';

export const UserInfo = ({ userID, onClick, onPost, customClass }) => {
    const { data: userData } = useUserDetails(userID);
    const navigate = useNavigate();

    let redirectToProfile = () => navigate(`${routes.Profile}/${userID}`);
    if (onClick) {
        redirectToProfile = onClick;
    }

    if (userData?.data()) {
        const { profile_picture_url, displayName, admin } =
            userData.data() || {};

        const inside = (
            <>
                <ImageComponent
                    className='atom__image'
                    src={profile_picture_url}
                    size='medium'
                    onClick={redirectToProfile}
                />
                <Text
                    type='primary'
                    size='large'
                    customClass={`${onPost ? '' : 'userinfo__text'} username ${
                        admin && 'username_admin'
                    }`}
                >
                    {displayName || 'deleted user'}
                </Text>
            </>
        );

        if (onPost) return inside;
        return <div className={`userinfo ${customClass}`}>{inside}</div>;
    }

    return null;
};

UserInfo.propTypes = {
    userID: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onPost: PropTypes.bool,
    customClass: PropTypes.string
};

UserInfo.defaultProps = {
    onClick: null,
    onPost: false,
    customClass: ''
};
