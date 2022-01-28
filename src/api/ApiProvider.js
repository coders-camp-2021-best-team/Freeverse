import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where
} from 'firebase/firestore';
import { db } from './Firebase';

class ApiProvider {
    chat_rooms = collection(db, 'chat_rooms');

    chat_room_messages = (chatRoomID) =>
        collection(this.chat_rooms, `${chatRoomID}/messages`);

    posts = collection(db, 'posts');

    post_comments = (postID) => collection(this.posts, `${postID}/comments`);

    users = collection(db, 'users');

    /**
     * @param {string} userID
     * @returns {Promise<import('./ApiProvider').User>}
     */
    async getUser(userID) {
        const user = doc(this.users, userID);
        return (await getDoc(user)).data();
    }

    /**
     * @param {string} userID
     */
    async getUserPosts(userID) {
        const user = await this.getUser(userID);
        return Promise.all(user.posts.map(async (p) => this.getPost(p)));
    }

    /**
     * @param {string} userID
     * @param {import('./ApiProvider').User} userData
     */
    async updateUser(userID, userData) {
        const user = doc(this.users, userID);
        return updateDoc(user, userData);
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
     * @param {string} chatRoomID
     * @param {import('./ApiProvider').ChatRoom} alreadyFetchedData
     */
    async getChatRoom(chatRoomID, alreadyFetchedData) {
        /**
         * @type {import('./ApiProvider').ChatRoom}
         */
        // eslint-disable-next-line operator-linebreak
        const chat_room =
            // eslint-disable-next-line operator-linebreak
            alreadyFetchedData ||
            (await getDoc(doc(this.chat_rooms, chatRoomID))).data();

        return {
            ...chat_room,
            id: chatRoomID,
            messages: await this.getChatRoomMessages(chatRoomID)
        };
    }

    /**
     * @param {string} chatRoomID
     * @returns {Promise<import('./ApiProvider').Message[]>}
     */
    async getChatRoomMessages(chatRoomID) {
        return (
            await getDocs(query(this.chat_room_messages(chatRoomID)))
        ).docs.map((d) => d.data());
    }

    /**
     * @param {string} chatRoomID
     * @param {import('./ApiProvider').Message} messageData
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
     * @param {import('./ApiProvider').ChatRoom} chatRoomData
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
     * @param {import('./ApiProvider').Post} postData
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
     */
    async getPost(postID) {
        const post = doc(this.posts, postID);

        /**
         * @type {import('./ApiProvider').Post}
         */
        const data = (await getDoc(post)).data();

        return {
            ...data,
            likes: data.reactions.reduce(
                (c, item) => (item.includes('-LIKE') ? c + 1 : c),
                0
            ),
            dislikes: data.reactions.reduce(
                (c, item) => (item.includes('-DISLIKE') ? c + 1 : c),
                0
            ),
            comments: await this.getPostComments(postID)
        };
    }

    /**
     * @param {string} postID
     * @returns {import('./ApiProvider').Comment[]}
     */
    async getPostComments(postID) {
        return (await getDocs(this.post_comments(postID))).docs.map((d) =>
            d.data()
        );
    }

    /**
     * @param {string} postID
     * @param {import('./ApiProvider').Comment} commentData
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

const apiProvider = new ApiProvider();
export { apiProvider };
