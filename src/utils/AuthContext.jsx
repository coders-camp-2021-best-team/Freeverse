import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { apiService, auth } from '../api';

export const AuthContext = createContext({
    /**
     * @type {User}
     */
    user: null,

    /**
     * @returns {Promise<import('firebase/auth').UserCredential>}
     */
    login: () => Promise,

    /**
     * @returns {Promise<void>}
     */
    logout: () => Promise
});

export const AuthContextProvider = ({ children }) => {
    /**
     * @type {import('firebase/auth').User}
     */
    const initialUser = null;

    const [user, setUser] = useState(initialUser);

    useEffect(
        () =>
            onAuthStateChanged(auth, async (u) => {
                setUser(u);

                if (u?.uid) {
                    const ud = await apiService.getUser(u.uid);

                    await apiService.setUser(u.uid, {
                        admin: false,
                        displayName: u.displayName,
                        profile_picture_url: u.photoURL,
                        ...ud
                    });
                }
            }),
        []
    );

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
