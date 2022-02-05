import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useCreateMessage = (chatRoomID) => {
    const ref = apiService.chatRoomMessages(chatRoomID);
    const mutation = useFirestoreCollectionMutation(ref);

    return mutation.mutate;
};
