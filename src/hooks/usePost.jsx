import { useFirestoreDocument } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePost = (id) => {
    const ref = apiService.post(id);

    return useFirestoreDocument(['post', id], ref, {
        subscribe: true
    });
};
