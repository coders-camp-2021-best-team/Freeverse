import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useUser } from '.';

export const useUserChatRooms = () => {
    const user = useUser();
    const userID = user.data?.uid;

    const ref = apiService.userChatRooms(userID);

    return useFirestoreQuery(['chat_rooms', userID], ref, {
        subscribe: true
    });
};
