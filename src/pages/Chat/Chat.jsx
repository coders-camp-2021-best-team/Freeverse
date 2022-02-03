import { MessageCollection, Form, Text } from '../../components';
import { usersMsgs } from '../../utils/Mocks';

import './Chat.scss';

export const ChatPage = () => {
    return (
        <div className='page__chat'>
            <div className='chat'>
                <Text size='extraLarge' customClass='title'>
                    Public chat room
                </Text>
                <div className='messages'>
                    <MessageCollection usersMsgs={usersMsgs} />
                </div>
            </div>
            <Form placeholder='Write message...' type='chat' onSubmit />
        </div>
    );
};
