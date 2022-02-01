import { MessageComponent } from '../../components';

export const ChatPage = () => {
    const user = {
        name: 'Batman',
        you: false
    };
    return (
        <MessageComponent
            date='21.12.2021  10:40 AM'
            name={user.name}
            isYours={user.you}
        >
            elo elo elo wiadoność 1,2,3
        </MessageComponent>
    );
};
