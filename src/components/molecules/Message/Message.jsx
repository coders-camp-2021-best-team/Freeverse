import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ImageComponent, Text } from '../..';
import { routes } from '../../../routes/Routes';
import { dateFormat } from '../../../utils/format';

import './Message.scss';
import { useUserDetails } from '../../../hooks';

export const MessageComponent = ({ children, date, isYours, profileID }) => {
    const redirect = useNavigate();
    const userDetails = useUserDetails(profileID);

    if (userDetails.data) {
        const { profile_picture_url, displayName } =
            userDetails.data.data() || {};

        return (
            <div className={`message__field ${isYours ? 'ownMessage' : ''}`}>
                <ImageComponent
                    src={profile_picture_url || ''}
                    size='small'
                    onClick={() => redirect(`${routes.Profile}/${profileID}`)}
                />
                <Text size='small' customClass='name'>
                    {displayName || 'deleted user'}
                </Text>
                <Text size='small' customClass='date'>
                    {dateFormat(date)}
                </Text>
                <Text type='primary' customClass='message'>
                    {children}
                </Text>
            </div>
        );
    }

    return null;
};

MessageComponent.propTypes = {
    children: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isYours: PropTypes.bool,
    profileID: PropTypes.string.isRequired
};

MessageComponent.defaultProps = {
    isYours: false
};
