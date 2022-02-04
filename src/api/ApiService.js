import { collection, doc, query, where } from 'firebase/firestore';
import { db } from './Firebase';

class ApiService {
    /**
     * @type {import('firebase/firestore').CollectionReference<import('./types').ChatRoom>}
     */
    chat_rooms = collection(db, 'chat_rooms');

    /**
     * @type {import('firebase/firestore').CollectionReference<import('./types').Post>}
     */
    posts = collection(db, 'posts');

    /**
     * @type {import('firebase/firestore').CollectionReference<import('./types').User>}
     */
    users = collection(db, 'users');

    /**
     * @param {string} userID
     * @returns {import('firebase/firestore').DocumentReference<import('./types').User>}
     */
    user(userID) {
        return userID ? doc(this.users, userID) : null;
    }

    /**
     * @param {string} userID
     * @returns {import('firebase/firestore').Query<import('./types').Post>}
     */
    userPosts(userID) {
        return query(this.posts, where('authorID', '==', userID));
    }

    /**
     * @returns {import('firebase/firestore').Query<import('./types').ChatRoom>}
     */
    publicChatRooms() {
        return query(this.chat_rooms, where('members', '==', null));
    }

    /**
     * @param {string} userID
     * @returns {import('firebase/firestore').Query<import('./types').ChatRoom>}
     */
    userChatRooms(userID) {
        return query(
            this.chat_rooms,
            where('members', 'array-contains', userID)
        );
    }

    /**
     * @param {string} chatRoomID
     * @returns {import('firebase/firestore').DocumentReference<import('./types').ChatRoom>}
     */
    chatRoom(chatRoomID) {
        return doc(this.chat_rooms, chatRoomID);
    }

    /**
     * @param {string} chatRoomID
     * @returns {import('firebase/firestore').CollectionReference<import('./types').Message>}
     */
    chatRoomMessages(chatRoomID) {
        return collection(this.chat_rooms, `${chatRoomID}/messages`);
    }

    /**
     * @param {string} postID
     * @returns {import('firebase/firestore').DocumentReference<import('./types').Post>}
     */
    post(postID) {
        return doc(this.posts, postID);
    }

    /**
     * @param {string} postID
     * @returns {import('firebase/firestore').CollectionReference<import('./types').Post>}
     */
    postComments(postID) {
        return collection(this.posts, `${postID}/comments`);
    }
}

const apiService = new ApiService();
export { apiService };
