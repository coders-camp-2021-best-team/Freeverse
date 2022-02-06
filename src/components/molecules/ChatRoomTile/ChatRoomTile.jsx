import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Button, Text } from '../..';
import { useChatRoom } from '../../../hooks';
import { routes } from '../../../routes/Routes';

import './ChatRoomTile.scss';

export const ChatRoomTile = ({ chatRoomID }) => {
    const chatRoom = useChatRoom(chatRoomID);
    const redirect = useNavigate();
    const redirectToChat = () => redirect(`${routes.Chat}/${chatRoomID}`);

    if (chatRoom.data?.data()) {
        const { name } = chatRoom.data.data();

        return (
            <div
                className='molecule__chat_room_tile'
                onClick={redirectToChat}
                role='cell'
            >
                <Text customClass='molecule__chat_room_tile__name'>{name}</Text>

                <Button text='Open' onClick={redirectToChat} />
            </div>
        );
    }

    return null;
};

ChatRoomTile.propTypes = {
    chatRoomID: PropTypes.string.isRequired
};
