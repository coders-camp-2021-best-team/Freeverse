import {
    useFirestoreCollectionMutation,
    useFirestoreQuery
} from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useAuth } from '.';

export const useUserPosts = (id = '') => {
    const { user } = useAuth();
    const userID = id || user.data?.uid;

    const ref = apiService.userPosts(userID);
    const col_ref = apiService.posts;
    const mutation = useFirestoreCollectionMutation(col_ref);

    return {
        ...useFirestoreQuery(['posts', userID], ref, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
