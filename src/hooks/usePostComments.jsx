import {
    useFirestoreCollectionMutation,
    useFirestoreQuery
} from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePostComments = (id = '') => {
    const ref = apiService.postComments(id);
    const ref_ord = apiService.postCommentsOrder(id);
    const mutation = useFirestoreCollectionMutation(ref);

    return {
        ...useFirestoreQuery(['post_comments', id], ref_ord, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
