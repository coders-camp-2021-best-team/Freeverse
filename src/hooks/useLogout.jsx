import { useAuthSignOut } from '@react-query-firebase/auth';
import { auth } from '../api';

export const useLogout = () => {
    const logoutMutation = useAuthSignOut(auth);

    return () => logoutMutation.mutate();
};
