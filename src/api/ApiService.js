import { collection, doc, query, where, orderBy } from 'firebase/firestore';
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

    postsOrder = query(this.posts, orderBy('createdOn', 'desc'));

    /**
     * @type {import('firebase/firestore').CollectionReference<import('./types').User>}
     */
    users = collection(db, 'users');

    /**
     * @param {string} userID
     * @returns {import('firebase/firestore').DocumentReference<import('./types').User>}
     */
    user(userID) {
        return doc(this.users, userID);
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
     * @returns {import('firebase/firestore').Query<import('./types').ChatRoom>}
     */
    privateChatRooms() {
        return query(this.chat_rooms, where('members', '!=', null));
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
     * @param {string} chatRoomID
     * @returns {import('firebase/firestore').Query<import('./types').Message>}
     */
    chatRoomMessagesOrder(chatRoomID) {
        return query(
            collection(this.chat_rooms, `${chatRoomID}/messages`),
            orderBy('createdOn')
        );
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
     * @returns {import('firebase/firestore').CollectionReference<import('./types').Comment>}
     */
    postComments(postID) {
        return collection(this.posts, `${postID}/comments`);
    }

    /**
     * @param {string} postID
     * @returns {import('firebase/firestore').CollectionReference<import('./types').Comment>}
     */
    postCommentsOrder(postID) {
        return query(
            collection(this.posts, `${postID}/comments`),
            orderBy('createdOn', 'desc')
        );
    }

    /**
     * @param {string} postID
     * @returns {import('firebase/firestore').CollectionReference<import('./types').Reaction>}
     */
    postReactions(postID) {
        return collection(this.posts, `${postID}/reactions`);
    }

    /**
     * @param {string} postID
     * @param {string} userID
     * @returns {import('firebase/firestore').DocumentReference<import('./types').Reaction>}
     */
    postReaction(postID, userID) {
        return doc(this.postReactions(postID), userID);
    }
}

const apiService = new ApiService();
export { apiService };
