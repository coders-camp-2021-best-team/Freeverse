import { useFirestoreDocument } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const useChatRoom = (id) => {
    const ref = apiService.chatRoom(id);

    return useFirestoreDocument(['chat_room', id], ref, {
        subscribe: true
    });
};
