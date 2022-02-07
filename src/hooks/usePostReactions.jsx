import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePostReactions = (id) => {
    const ref = apiService.postReactions(id);

    return useFirestoreQuery(['post_reactions', id], ref, {
        subscribe: true
    });
};
