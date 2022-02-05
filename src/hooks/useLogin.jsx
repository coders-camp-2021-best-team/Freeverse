import { useAuthSignInWithPopup } from '@react-query-firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../api';

export const useLogin = () => {
    const loginMutation = useAuthSignInWithPopup(auth);

    return () =>
        loginMutation.mutateAsync({
            provider: new GoogleAuthProvider()
        });
};
