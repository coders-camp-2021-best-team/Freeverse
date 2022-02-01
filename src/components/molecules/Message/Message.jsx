import PropTypes from 'prop-types';
import { ImageComponent, Text } from '../..';

import './Message.scss';

export const MessageComponent = ({ children, date, name, avatar }) => {
    return (
        <div className='message__field'>
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
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};
