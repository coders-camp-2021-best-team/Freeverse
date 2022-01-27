import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { apiProvider } from '../../api';

export const ProfilePage = () => {
    const { user } = useAuth();

    const [chatRooms, setChatRooms] = useState();
    const [posts, setPosts] = useState();

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
