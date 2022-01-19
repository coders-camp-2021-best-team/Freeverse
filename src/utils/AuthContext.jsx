/* eslint-disable no-unused-vars */

import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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
     * @param {string} email
     * @param {string} password
     * @returns {Promise<UserCredential>}
     */
    register: (email, password) => Promise,

    /**
     * @param {string} email
     * @param {string} password
     * @returns {Promise<UserCredential>}
     */
    login: (email, password) => Promise,

    /**
     * @returns {Promise<UserCredential>}
     */
    loginWithGoogle: () => Promise,

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

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        signOut(auth);
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const object = {
        user,
        register,
        login,
        loginWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={object}>{children}</AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
