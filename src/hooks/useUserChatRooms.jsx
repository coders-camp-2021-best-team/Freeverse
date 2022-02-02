import {
    useFirestoreQuery,
    useFirestoreCollectionMutation
} from '@react-query-firebase/firestore';
import { apiService } from '../api';
import { useAuth } from '.';

export const useUserChatRooms = (id = '') => {
    const { user } = useAuth();
    const userID = id || user.data?.uid;

    const ref = apiService.userChatRooms(userID);
    const col_ref = apiService.chat_rooms;
    const mutation = useFirestoreCollectionMutation(col_ref);

    return {
        ...useFirestoreQuery(['chat_rooms', userID], ref, {
            subscribe: true
        }),
        create: mutation.mutate
    };
};
