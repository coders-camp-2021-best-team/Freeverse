import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useCreateComment = (postID) => {
    const ref = apiService.postComments(postID);
    const mutation = useFirestoreCollectionMutation(ref);

    return mutation.mutate;
};
