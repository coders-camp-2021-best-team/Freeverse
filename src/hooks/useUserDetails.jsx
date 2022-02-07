import { useFirestoreDocument } from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useUser } from '.';

export const useUserDetails = (id) => {
    const user = useUser();

    const userID = id || user.data?.uid;

    const ref = apiService.user(userID);
    return useFirestoreDocument(['user_details', userID], ref, {
        subscribe: true
    });
};
