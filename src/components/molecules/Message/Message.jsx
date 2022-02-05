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

    return (
        userDetails.isSuccess && (
            <div className={`message__field ${isYours ? 'ownMessage' : ''}`}>
                <ImageComponent
                    src={userDetails.data.data().profile_picture_url}
                    size='small'
                    onClick={() => redirect(`${routes.Profile}/${profileID}`)}
                />
                <Text size='small' customClass='name'>
                    {userDetails.data.data().displayName}
                </Text>
                <Text size='small' customClass='date'>
                    {dateFormat(date)}
                </Text>
                <Text type='primary' customClass='message'>
                    {children}
                </Text>
            </div>
        )
    );
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
