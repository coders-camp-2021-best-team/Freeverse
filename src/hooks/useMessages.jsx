import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useMessages = (roomID) => {
    const ref_ord = apiService.chatRoomMessagesOrder(roomID);

    return useFirestoreQuery(['room_messages', roomID], ref_ord, {
        subscribe: true
    });
};
