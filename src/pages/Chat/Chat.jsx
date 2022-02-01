import { MessageComponent } from '../../components';

export const ChatPage = () => {
    const currentDate = new Date();
    const user = {
        name: 'Batman',
        you: false
    };
    return (
        <MessageComponent
            date={currentDate}
            name={user.name}
            isYours={user.you}
        >
            Lorem ipsum
        </MessageComponent>
    );
};
