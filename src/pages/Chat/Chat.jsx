import { MessageComponent } from '../../components';
import avatar from '../../images/avatar.png';

export const ChatPage = () => {
    const user = {
        name: 'Batman'
    };
    return (
        <MessageComponent
            date='21.12.2021  10:40 AM'
            name={user.name}
            avatar={avatar}
        >
            elo elo elo wiadoność 1,2,3
        </MessageComponent>
    );
};
