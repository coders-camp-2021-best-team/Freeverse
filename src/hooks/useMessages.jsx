import {
    useFirestoreCollectionMutation,
    useFirestoreQuery
} from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useMessages = (roomID) => {
    const ref = apiService.chatRoomMessages(roomID);
    const ref_ord = apiService.chatRoomMessagesOrder(roomID);
    const mutation = useFirestoreCollectionMutation(ref);

    return {
        ...useFirestoreQuery(['room_messages', roomID], ref_ord, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
