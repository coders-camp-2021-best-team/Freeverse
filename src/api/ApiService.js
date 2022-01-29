import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    setDoc,
    where
} from 'firebase/firestore';
import { db } from './Firebase';

class ApiService {
    chat_rooms = collection(db, 'chat_rooms');

    chat_room_messages = (chatRoomID) =>
        collection(this.chat_rooms, `${chatRoomID}/messages`);

    posts = collection(db, 'posts');

    post_comments = (postID) => collection(this.posts, `${postID}/comments`);

    users = collection(db, 'users');

    /**
     * @param {string} userID
     * @returns {Promise<import('./types').User>}
     */
    async getUser(userID) {
        const user = doc(this.users, userID);
        return (await getDoc(user)).data();
    }

    /**
     * @callback getUserCallback
     * @param {import('./types').User} user
     */
    /**
     * @param {string} userID
     * @param {getUserCallback} cb
     */
    trackGetUser(userID, cb) {
        const user = doc(this.users, userID);
        return onSnapshot(user, (d) => cb(d.data()));
    }

    /**
     * @param {string} userID
     */
    async getUserPosts(userID) {
        const q = query(this.posts, where('authorID', '==', userID));
        const posts = await Promise.all(
            (
                await getDocs(q)
            ).docs.map(async (d) => this.getPost(d.id, d.data()))
        );
        return posts;
    }

    /**
     * @callback getUserPostsCallback
     * @param {import('./types').PostFull[]} posts
     */
    /**
     * @param {string} userID
     * @param {getUserPostsCallback} cb
     */
    trackGetUserPosts(userID, cb) {
        const q = query(this.posts, where('authorID', '==', userID));
        return onSnapshot(q, async (d) =>
            cb(
                await Promise.all(
                    d.docs.map(async (e) => this.getPost(e.id, e.data()))
                )
            )
        );
    }

    /**
     * @param {string} userID
     * @param {import('./types').User} userData
     */
    async setUser(userID, userData) {
        const user = doc(this.users, userID);
        return setDoc(user, userData);
    }

    /**
     * @param {string} userID
     */
    async getUserChatRooms(userID) {
        const q = query(
            this.chat_rooms,
            where('members', 'array-contains', userID)
        );
        return Promise.all(
            (await getDocs(q)).docs.map(async (d) =>
                this.getChatRoom(d.id, d.data())
            )
        );
    }

    /**
     * @callback getUserChatRoomsCallback
     * @param {import('./types').ChatRoomFull[]} rooms
     */
    /**
     * @param {string} userID
     * @param {getUserChatRoomsCallback} cb
     */
    trackGetUserChatRooms(userID, cb) {
        const q = query(
            this.chat_rooms,
            where('members', 'array-contains', userID)
        );
        return onSnapshot(q, async (d) =>
            cb(
                await Promise.all(
                    d.docs.map(async (e) => this.getChatRoom(e.id, e.data()))
                )
            )
        );
    }

    /**
     * @param {string} chatRoomID
     * @param {import('./types').ChatRoom} alreadyFetchedData
     * @returns {import('./types').ChatRoomFull}
     */
    async getChatRoom(chatRoomID, alreadyFetchedData) {
        /**
         * @type {import('./types').ChatRoom}
         */
        const chat_room =
            alreadyFetchedData ||
            (await getDoc(doc(this.chat_rooms, chatRoomID))).data();

        return {
            ...chat_room,
            name: chatRoomID
        };
    }

    /**
     * @param {string} chatRoomID
     * @returns {Promise<import('./types').Message[]>}
     */
    async getChatRoomMessages(chatRoomID) {
        return (await getDocs(this.chat_room_messages(chatRoomID))).docs.map(
            (d) => d.data()
        );
    }

    /**
     * @callback getChatRoomMsgsCallback
     * @param {import('./types').Message[]} messages
     */
    /**
     * @param {string} chatRoomID
     * @param {getChatRoomMsgsCallback} cb
     */
    trackGetChatRoomMessages(chatRoomID, cb) {
        const q = this.chat_room_messages(chatRoomID);
        onSnapshot(q, async (d) =>
            cb(await Promise.all(d.docs.map(async (e) => e.data())))
        );
    }

    /**
     * @param {string} chatRoomID
     * @param {import('./types').Message} messageData
     */
    async createChatRoomMessage(chatRoomID, messageData) {
        const message = doc(this.chat_room_messages(chatRoomID));
        await setDoc(message, messageData);
        return message.id;
    }

    /**
     * @param {string} chatRoomID
     * @param {string} messageID
     */
    async deleteChatRoomMessage(chatRoomID, messageID) {
        const message = doc(this.chat_room_messages(chatRoomID), messageID);
        return deleteDoc(message);
    }

    /**
     * @param {string} chatRoomID
     * @param {import('./types').ChatRoom} chatRoomData
     */
    async createChatRoom(chatRoomID, chatRoomData) {
        const chat_room = doc(this.chat_rooms, chatRoomID);
        await setDoc(chat_room, chatRoomData);
        return chat_room.id;
    }

    /**
     * @param {string} chatRoomID
     */
    async deleteChatRoom(chatRoomID) {
        const chat_room = doc(this.chat_rooms, chatRoomID);
        return deleteDoc(chat_room);
    }

    /**
     * @param {import('./types').Post} postData
     */
    async createPost(postData) {
        const post = doc(this.posts);
        await setDoc(post, postData);
        return post.id;
    }

    /**
     * @param {string} postID
     */
    async deletePost(postID) {
        const post = doc(this.posts, postID);
        return deleteDoc(post);
    }

    /**
     * @param {string} postID
     * @param {import('./types').Post} alreadyFetchedData
     */
    async getPost(postID, alreadyFetchedData) {
        const post = doc(this.posts, postID);

        /**
         * @type {import('./types').Post}
         */
        const data = alreadyFetchedData || (await getDoc(post)).data();

        /**
         * @type {import('./types').PostFull}
         */
        const full_post = {
            ...data,
            id: postID,
            likes: Object.values(data.reactions).reduce(
                (c, item) => (item === 'LIKE' ? c + 1 : c),
                0
            ),
            dislikes: Object.values(data.reactions).reduce(
                (c, item) => (item === 'DISLIKE' ? c + 1 : c),
                0
            )
        };

        return full_post;
    }

    /**
     * @param {string} postID
     * @returns {Promise<import('./types').Comment[]>}
     */
    async getPostComments(postID) {
        return (await getDocs(this.post_comments(postID))).docs.map((d) =>
            d.data()
        );
    }

    /**
     * @callback getPostCommentsCallback
     * @param {import('./types').Comment[]} comments
     */
    /**
     * @param {string} postID
     * @param {getPostCommentsCallback} cb
     */
    trackGetPostComments(postID, cb) {
        const q = this.chat_room_messages(postID);
        return onSnapshot(q, async (d) =>
            cb(await Promise.all(d.docs.map(async (e) => e.data())))
        );
    }

    /**
     * @param {string} postID
     * @param {import('./types').Comment} commentData
     */
    async createPostComment(postID, commentData) {
        const comment = doc(this.post_comments(postID));

        await setDoc(comment, commentData);
        return comment.id;
    }

    /**
     * @param {string} postID
     * @param {string} commentID
     */
    async deletePostComment(postID, commentID) {
        const comment = doc(this.post_comments(postID), commentID);
        return deleteDoc(comment);
    }
}

const apiService = new ApiService();
export { apiService };
