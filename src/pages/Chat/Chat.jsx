import { MessageCollection, Form, Text } from '../../components';
import { usersMsgs } from '../../utils/Mocks';

import './Chat.scss';

export const ChatPage = () => {
    return (
        <div className='page__chat'>
            <Text size='extraLarge' customClass='title'>
                Public chat room
            </Text>
            <div className='chat'>
                <MessageCollection usersMsgs={usersMsgs} />
                <Form placeholder='Write message...' type='chat' onSubmit />
            </div>
        </div>
    );
};
