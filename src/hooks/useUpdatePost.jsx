import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useUpdatePost = (id) => {
    const ref = apiService.post(id);

    return useFirestoreDocumentMutation(ref, { merge: true }).mutateAsync;
};
