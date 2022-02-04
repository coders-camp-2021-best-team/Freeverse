import { Timestamp } from 'firebase/firestore';
import propTypes from 'prop-types';
import { useParams } from 'react-router';
import { MessageCollection, Form, Text } from '../../components';
import { useAuth, useChatRoom, useMessages } from '../../hooks';

import './Chat.scss';

export const ChatPage = ({ id }) => {
    const params = useParams();
    const chatID = id || params.id;

    const { user } = useAuth();
    const chatRoom = useChatRoom(chatID);
    const messages = useMessages(chatID);

    return (
        user.isSuccess &&
        chatRoom.isSuccess &&
        messages.isSuccess && (
            <div className='page__chat'>
                <div className='chat'>
                    <Text size='extraLarge' customClass='title'>
                        {chatRoom.data.data().name}
                    </Text>
                    <div className='messages'>
                        <MessageCollection
                            userMsgs={messages.data.docs.map((d) => d.data())}
                        />
                    </div>
                </div>
                <Form
                    placeholder='Write message...'
                    type='chat'
                    onSubmit={(data) => {
                        messages.create({
                            authorID: user.data.uid,
                            createdOn: Timestamp.now(),
                            text_content: data.chat
                        });
                    }}
                />
            </div>
        )
    );
};

ChatPage.propTypes = {
    id: propTypes.string
};

ChatPage.defaultProps = {
    id: null
};
