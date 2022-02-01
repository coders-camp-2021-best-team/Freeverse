import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ImageComponent, Text } from '../..';
import { routes } from '../../../routes/Routes';
import chatAvatar from '../../../images/avatar.png';

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

    const stringDate = () => {
        const mm = date.getMonth() + 1;
        const dd = date.getDate();
        const hh = date.getHours();
        const min = date.getMinutes();
        const result = [
            [
                (dd > 9 ? '' : '0') + dd,
                (mm > 9 ? '' : '0') + mm,
                date.getFullYear()
            ].join('.'),
            [(hh > 10 ? '' : '0') + hh, (min > 9 ? '' : '0') + min].join(':')
        ].join(' ');
        return result;
    };

    return (
        <div className={`message__field ${isYours ? 'ownMessage' : ''}`}>
            <ImageComponent
                src={avatar}
                size='small'
                onClick={() => { redirect(`${routes.Feed}${routes.Profile}/${profileID}`); }}
            />
            <Text size='small' customClass='name'>
                {name}
            </Text>
            <Text size='small' customClass='date'>
                {stringDate()}
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
