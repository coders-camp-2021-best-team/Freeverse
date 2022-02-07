import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePosts = () => {
    const ref = apiService.postsOrder;

    return useFirestoreQuery('posts', ref, {
        subscribe: true
    });
};
