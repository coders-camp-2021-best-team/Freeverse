import {
    useAuthUser,
    useAuthSignInWithPopup,
    useAuthSignOut
} from '@react-query-firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../api';

export const useAuth = () => {
    const user = useAuthUser(['user'], auth);
    const loginMutation = useAuthSignInWithPopup(auth);
    const logoutMutation = useAuthSignOut(auth);

    return {
        user,
        login: () =>
            loginMutation.mutate({
                provider: new GoogleAuthProvider()
            }),
        logout: () => logoutMutation.mutate()
    };
};
