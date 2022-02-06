import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';

export const usePublicChatRooms = () => {
    const ref = apiService.publicChatRooms();
    return useFirestoreQuery(['chat_rooms', 'public'], ref, {
        subscribe: true
    });
};
