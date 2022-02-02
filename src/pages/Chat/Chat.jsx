import { MessageComponent } from '../../components';

export const ChatPage = () => {
    // TODO temporary values
    const currentDate = new Date();
    const user = {
        name: 'Batman',
        you: false,
        id: 'jP-2I-E7'
    };
    const userSecond = {
        name: 'Superman',
        you: true,
        id: 'G-M-D'
    };
    return (
        <>
            <MessageComponent
                date={currentDate}
                name={user.name}
                isYours={user.you}
                profileID={user.id}
            >
                Lorem ipsum
            </MessageComponent>
            <MessageComponent
                date={currentDate}
                name={userSecond.name}
                isYours={userSecond.you}
                profileID={userSecond.id}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto velit vero incidunt eligendi sit modi unde delectus
                distinctio ex recusandae amet, expedita nihil harum natus
                voluptas, necessitatibus voluptates, asperiores commodi.
            </MessageComponent>
        </>
    );
};
