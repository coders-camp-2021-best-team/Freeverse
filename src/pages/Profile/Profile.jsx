import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { apiProvider } from '../../api';

export const ProfilePage = () => {
    const { user } = useAuth();

    /**
     * @type {import('../../api/types').ChatRoomFull[]}
     */
    const initialChatRooms = null;

    /**
     * @type {import('../../api/types').PostFull[]}
     */
    const initialPosts = null;

    const [chatRooms, setChatRooms] = useState(initialChatRooms);
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        const fetch = async () => {
            setChatRooms(await apiProvider.getUserChatRooms(user.uid));
            setPosts(await apiProvider.getUserPosts(user.uid));
        };
        fetch();
    });

    return (
        <>
            <div>This is profile page</div>
            <div>{`Hello, ${user.displayName}!`}</div>
            <pre>
                <code>{JSON.stringify(user, null, 4)}</code>
            </pre>
            <pre>
                <code>{JSON.stringify(chatRooms, null, 4)}</code>
            </pre>
            <pre>
                <code>{JSON.stringify(posts, null, 4)}</code>
            </pre>
        </>
    );
};
