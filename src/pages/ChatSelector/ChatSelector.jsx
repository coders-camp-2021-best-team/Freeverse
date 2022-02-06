import { useNavigate } from 'react-router';
import { usePublicChatRooms, useUser, useUserChatRooms } from '../../hooks';
import { Button, ChatRoomTile, Text } from '../../components';

import './ChatSelector.scss';
import { routes } from '../../routes/Routes';

export const ChatSelectorPage = () => {
    const user = useUser();
    const { data: userChatRoomsData } = useUserChatRooms(user.data.uid);
    const { data: publicChatRoomsData } = usePublicChatRooms();

    const navigate = useNavigate();
    const redirectToCreateRoomForm = () =>
        navigate(routes.ChatCreator, { replace: true });

    if (!userChatRoomsData || !publicChatRoomsData) {
        return null;
    }

    return (
        <div className='page__chat_selector'>
            <div className='page__chat_selector__rooms'>
                <Text type='primary' size='large'>
                    Your Chat Rooms
                </Text>

                {userChatRoomsData.docs.map(({ id }) => (
                    <ChatRoomTile chatRoomID={id} key={id} />
                ))}

                <Button
                    text='+ Create New'
                    onClick={redirectToCreateRoomForm}
                />
            </div>

            <div className='page__chat_selector__rooms'>
                <Text type='primary' size='large'>
                    Public Chat Rooms
                </Text>

                {publicChatRoomsData.docs.map(({ id }) => (
                    <ChatRoomTile chatRoomID={id} key={id} />
                ))}

                <Button
                    text='+ Create New'
                    onClick={redirectToCreateRoomForm}
                />
            </div>
        </div>
    );
};
