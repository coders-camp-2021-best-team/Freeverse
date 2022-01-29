import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../api';
import { useAuth } from '../hooks';

export const UserContext = createContext({
    /**
     * @type {import('../api/types').User}
     */
    userDetails: null,

    /**
     * @type {import('../api/types').PostFull[]}
     */
    userPosts: null,

    /**
     * @type {import('../api/types').ChatRoomFull[]}
     */
    userChatRooms: null
});

export const UserContextProvider = ({ children }) => {
    /**
     * @type {import('../api/types').User}
     */
    const initialUserDetails = null;

    /**
     * @type {import('../api/types').PostFull[]}
     */
    const initialUserPosts = null;

    /**
     * @type {import('../api/types').ChatRoomFull[]}
     */
    const initialUserChatRooms = null;

    const [userDetails, setUserDetails] = useState(initialUserDetails);
    const [userPosts, setUserPosts] = useState(initialUserPosts);
    const [userChatRooms, setUserChatRooms] = useState(initialUserChatRooms);

    const { user } = useAuth();

    useEffect(() => {
        const unsubs = [];

        if (user?.uid) {
            unsubs.push(
                apiService.trackGetUser(user.uid, setUserDetails),
                apiService.trackGetUserPosts(user.uid, setUserPosts),
                apiService.trackGetUserChatRooms(user.uid, setUserChatRooms)
            );
        }

        return () => {
            unsubs.forEach((u) => u());
        };
    }, [user]);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const object = {
        userDetails,
        userPosts,
        userChatRooms
    };

    return (
        <UserContext.Provider value={object}>{children}</UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
