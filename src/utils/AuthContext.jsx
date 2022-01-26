/* eslint-disable no-unused-vars */

import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    onAuthStateChanged,
    signOut,
    UserCredential,
    User,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '.';

export const AuthContext = createContext({
    /**
     * @type {User}
     */
    user: null,

    /**
     * @returns {Promise<UserCredential>}
     */
    login: () => Promise,

    /**
     * @returns {Promise<void>}
     */
    logout: () => Promise
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
        });
        return unsubscribe;
    }, []);

    const login = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        return signOut(auth);
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const object = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={object}>{children}</AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
