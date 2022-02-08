import { useFirestoreDocumentDeletion } from '@react-query-firebase/firestore';
import { doc } from 'firebase/firestore';
import { apiService } from '../api';

export const useRemoveComment = (postID, commentID) => {
    const ref = apiService.postComments(postID);
    const ref2 = doc(ref, commentID);
    const del = useFirestoreDocumentDeletion(ref2);
    return del.mutate;
};
