import { MessageComponent } from '../../components';

export const ChatPage = () => {
    // TODO temporary values
    const currentDate = new Date();
    const user = {
        name: 'Batman',
        you: false,
        id: 'jP-2I-E7'
    };
    return (
        <MessageComponent
            date={currentDate}
            name={user.name}
            isYours={user.you}
            profileID={user.id}
        >
            Lorem ipsum
        </MessageComponent>
    );
};
