import { Timestamp } from 'firebase/firestore';
import propTypes from 'prop-types';
import { Navigate, useParams } from 'react-router';
import { MessageCollection, Form, Text } from '../../components';
import {
    useChatRoom,
    useCreateMessage,
    useMessages,
    useUser
} from '../../hooks';
import { routes } from '../../routes/Routes';

import './Chat.scss';

export const ChatPage = ({ id }) => {
    const params = useParams();
    const chatID = id || params.id;

    const user = useUser();
    const chatRoom = useChatRoom(chatID);
    const messages = useMessages(chatID);
    const createMessage = useCreateMessage(chatID);

    if (chatRoom.isLoading || messages.isLoading) return null;

    if (chatRoom.data && messages.data) {
        return (
            <div className='page__chat'>
                <div className='chat'>
                    <Text size='extraLarge' customClass='title'>
                        {chatRoom.data.data().name}
                    </Text>
                    <MessageCollection
                        userMsgs={messages.data.docs.map((d) => d.data())}
                    />
                </div>
                <Form
                    placeholder='Write message...'
                    type='chat'
                    onSubmit={(data) => {
                        createMessage({
                            authorID: user.data.uid,
                            createdOn: Timestamp.now(),
                            text_content: data.chat
                        });
                    }}
                />
            </div>
        );
    }

    return <Navigate to={routes.NotFound} replace />;
};

ChatPage.propTypes = {
    id: propTypes.string
};

ChatPage.defaultProps = {
    id: null
};
