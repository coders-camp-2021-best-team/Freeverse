import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePostComments = (id) => {
    const ref_ord = apiService.postCommentsOrder(id);

    return useFirestoreQuery(['post_comments', id], ref_ord, {
        subscribe: true
    });
};
