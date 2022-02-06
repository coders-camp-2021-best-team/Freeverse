import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useCreatePost = () => {
    const ref = apiService.posts;
    const mutation = useFirestoreCollectionMutation(ref);
    return mutation.mutate;
};
