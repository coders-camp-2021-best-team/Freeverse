import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Timestamp } from 'firebase/firestore';
import {
    useAuth,
    useUserDetails,
    useUserPosts,
    useUserChatRooms,
    usePublicChatRooms
} from '../../hooks';
import { Button } from '../../components';

export const ProfilePage = ({ id }) => {
    const params = useParams();
    const userID = id || params.id;

    const {
        user: { data: user }
    } = useAuth();
    const { data: userDetails } = useUserDetails(userID);
    const { data: userPosts, create: createPost } = useUserPosts(userID);
    const { data: userChatRooms, create: createChatRoom } =
        useUserChatRooms(userID);
    const { data: publicChatRooms } = usePublicChatRooms();

    return (
        <>
            <div>This is profile page</div>
            <div>{`Hello, ${user.displayName}!`}</div>
            <pre>
                <code>{JSON.stringify(user, null, 4)}</code>
            </pre>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            userID,
                            userDetails: userDetails?.data(),
                            userPosts: userPosts?.docs.map((d) => ({
                                id: d.id,
                                ...d.data()
                            })),
                            userChatRooms: userChatRooms?.docs.map((d) => ({
                                id: d.id,
                                ...d.data()
                            })),
                            publicChatRooms: publicChatRooms?.docs.map((d) => ({
                                id: d.id,
                                ...d.data()
                            }))
                        },
                        null,
                        4
                    )}
                </code>
            </pre>
            <div role='form'>
                <Button
                    text='create new private chat room'
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        const name = prompt(
                            'Chat room name:',
                            `private-chat-room-${Date.now()}`
                        );

                        createChatRoom({
                            name,
                            admins: [user.uid],
                            members: [user.uid]
                        });
                    }}
                />
                <Button
                    text='create new public chat room'
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        const name = prompt(
                            'Chat room name:',
                            `public-chat-room-${Date.now()}`
                        );

                        createChatRoom({
                            name,
                            admins: [user.uid],
                            members: null
                        });
                    }}
                />
                <Button
                    text='create new post'
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        const content = prompt('Post content:');

                        createPost({
                            authorID: user.uid,
                            createdOn: Timestamp.now(),
                            reactions: {},
                            text_content: content
                        });
                    }}
                />
            </div>
        </>
    );
};

ProfilePage.propTypes = {
    id: PropTypes.string
};

ProfilePage.defaultProps = {
    id: null
};
