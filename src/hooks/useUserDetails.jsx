import { useFirestoreDocument } from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useAuth } from '.';

export const useUserDetails = (id = '') => {
    const { user } = useAuth();

    const userID = id || user.data?.uid;

    const ref = apiService.user(userID);
    return useFirestoreDocument(['user_details', userID], ref, {
        subscribe: true
    });
};
