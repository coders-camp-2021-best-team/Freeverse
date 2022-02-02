import {
    useFirestoreCollectionMutation,
    useFirestoreQuery
} from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePostComments = (id = '') => {
    const ref = apiService.postComments(id);
    const mutation = useFirestoreCollectionMutation(ref);

    return {
        ...useFirestoreQuery(['post_comments', id], ref, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
