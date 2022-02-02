import { MessageComponent } from '../..';

export const MessageCollection = () => {
    const usersMsgs = [
        {
            profileId: '1',
            name: 'Mateusz',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            isYour: true,
            date: new Date(),
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate'
        },
        {
            profileId: '2',
            name: 'Wiktoria',
            isYour: false,
            date: new Date(),
            message: 'Lorem ipsum '
        },
        {
            profileId: '3',
            name: 'Mariusz',
            isYour: false,
            date: new Date(),
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius necessitatibus accusantium vero a maiores nobis fugit provident saepe, reiciendis sit assumenda iusto facilis voluptates cumque reprehenderit vel qui eaque?'
        },
    ];

    return (usersMsgs.map((user) => {
        return (
            <MessageComponent
                date={user.date}
                name={user.name}
                avatar={user.avatar}
                isYours={user.isYour}
                profileID={user.profileId}
            >
                {user.message}
            </MessageComponent>
        );
    })
    );
};
