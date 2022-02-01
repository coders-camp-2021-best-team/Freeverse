import PropTypes from 'prop-types';
import { ImageComponent, Text } from '../..';
import chatAvatar from '../../../images/avatar.png';

import './Message.scss';

export const MessageComponent = ({ children, date, name, avatar, isYours }) => {
    return (
        <div className={`message__field ${isYours ? 'ownMessage' : ''}`}>
            <ImageComponent src={avatar} size='small' onClick />
            <Text size='small' customClass='name'>
                {name}
            </Text>
            <Text size='small' customClass='date'>
                {date}
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
};

MessageComponent.defaultProps = {
    avatar: chatAvatar,
    isYours: false
};
