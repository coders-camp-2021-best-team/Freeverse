import { useFirestoreDocumentDeletion } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useRemovePost = (id) => {
    const ref = apiService.post(id);
    const del = useFirestoreDocumentDeletion(ref);
    return del.mutate;
};
