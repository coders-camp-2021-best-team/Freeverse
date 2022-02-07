import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useUser } from '.';

export const useUserPosts = (id) => {
    const user = useUser();
    const userID = id || user.data?.uid;

    const ref = apiService.userPosts(userID);

    return useFirestoreQuery(['posts', userID], ref, {
        subscribe: true
    });
};
