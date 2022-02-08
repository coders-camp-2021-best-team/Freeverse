import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';
import { useUser } from '.';
import { apiService } from '../api';

export const useReactOnPost = (id) => {
    const user = useUser();
    const ref = apiService.postReaction(id, user.data?.uid);
    const mutation = useFirestoreDocumentMutation(ref);
    return mutation.mutate;
};
