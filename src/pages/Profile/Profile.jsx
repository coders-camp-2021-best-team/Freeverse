import { useAuth, useUser } from '../../hooks';
import { apiProvider } from '../../api';
import { Button } from '../../components';

export const ProfilePage = () => {
    const { user } = useAuth();
    const { userDetails, userPosts, userChatRooms } = useUser();

    return (
        <>
            <div>This is profile page</div>
            <div>{`Hello, ${user.displayName}!`}</div>
            {/* <pre>
                <code>{JSON.stringify(user, null, 4)}</code>
            </pre> */}
            <pre>
                <code>{JSON.stringify(userDetails, null, 4)}</code>
            </pre>
            <pre>
                <code>{JSON.stringify(userPosts, null, 4)}</code>
            </pre>
            <pre>
                <code>{JSON.stringify(userChatRooms, null, 4)}</code>
            </pre>
            <div role='form'>
                <Button
                    text='create new chat room'
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        const name = prompt(
                            'Chat room name:',
                            `new-chat-room-${Date.now()}`
                        );

                        apiProvider.createChatRoom(name, {
                            admins: [user.uid],
                            members: [user.uid]
                        });
                    }}
                />

                <Button
                    text='delete chat room'
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        const name = prompt(
                            'Chat room name:',
                            `new-chat-room-${Date.now()}`
                        );

                        apiProvider.deleteChatRoom(name);
                    }}
                />
            </div>
        </>
    );
};
