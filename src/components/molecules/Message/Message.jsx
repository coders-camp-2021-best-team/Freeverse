import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageComponent, Text } from '../..';
import { routes } from '../../../routes/Routes';
import chatAvatar from '../../../images/avatar.png';
import { dateFormat } from '../../../utils/format';

import './Message.scss';

export const MessageComponent = ({
    children,
    date,
    name,
    avatar,
    isYours,
    profileID
}) => {
    const redirect = useNavigate();

    return (
        <div className={`message__field ${isYours ? 'ownMessage' : ''}`}>
            <ImageComponent
                src={avatar}
                size='small'
                onClick={useCallback(() => {
                    redirect(`${routes.Feed}${routes.Profile}/${profileID}`);
                }, [profileID, redirect])}
            />
            <Text size='small' customClass='name'>
                {name}
            </Text>
            <Text size='small' customClass='date'>
                {dateFormat(date)}
            </Text>
            <Text type='primary' customClass='message'>
                {children}
            </Text>
        </div>
    );
};

MessageComponent.propTypes = {
    children: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isYours: PropTypes.bool,
    profileID: PropTypes.string.isRequired
};

MessageComponent.defaultProps = {
    avatar: chatAvatar,
    isYours: false
};
