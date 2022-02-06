import { useNavigate } from 'react-router';
import { usePublicChatRooms, useUser, useUserChatRooms } from '../../hooks';
import { Button, ChatRoomTile, Text } from '../../components';

import './ChatSelector.scss';
import { routes } from '../../routes/Routes';

export const ChatSelectorPage = () => {
    const user = useUser();
    const userChatRooms = useUserChatRooms(user.data.uid);
    const publicChatRooms = usePublicChatRooms();

    const navigate = useNavigate();
    const redirectToCreateRoomForm = () =>
        navigate(routes.CreateRoomForm, { replace: true });

    if (userChatRooms.data && publicChatRooms.data) {
        return (
            <div className='page__chat_selector'>
                <div className='page__chat_selector__rooms'>
                    <Text type='primary' size='large'>
                        Your Chat Rooms
                    </Text>

                    {userChatRooms.data.docs.map(({ id }) => (
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

                    {publicChatRooms.data.docs.map(({ id }) => (
                        <ChatRoomTile chatRoomID={id} key={id} />
                    ))}

                    <Button
                        text='+ Create New'
                        onClick={redirectToCreateRoomForm}
                    />
                </div>
            </div>
        );
    }

    return null;
};
