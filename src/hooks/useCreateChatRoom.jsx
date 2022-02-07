import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useCreateChatRoom = () => {
    const ref = apiService.chat_rooms;
    const mutation = useFirestoreCollectionMutation(ref);
    return mutation.mutateAsync;
};
