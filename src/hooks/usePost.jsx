import {
    useFirestoreCollectionMutation,
    useFirestoreDocument
} from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePost = (id = '') => {
    const ref = apiService.post(id);
    const mutation = useFirestoreCollectionMutation(apiService.posts);

    return {
        ...useFirestoreDocument(['post', id], ref, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
