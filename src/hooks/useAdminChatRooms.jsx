import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useUser } from '.';

export const useAdminChatRooms = () => {
    const user = useUser();
    const userID = user.data?.uid;

    const ref = apiService.privateChatRooms();

    return useFirestoreQuery(['admin_chat_rooms', userID], ref, {
        subscribe: true
    });
};
