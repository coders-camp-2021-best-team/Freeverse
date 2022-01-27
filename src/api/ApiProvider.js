/* eslint-disable lines-between-class-members */
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
     * @returns {Promise<{ background_picture_url?: string, birthday?: Date, hobbies?: string[], posts?: string[], profile_picture_url?: string, displayName: string }>}
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
     * @param {{ background_picture_url?: string, birthday?: Date, hobbies?: string[], posts?: string[], profile_picture_url?: string, displayName?: string }} userData
     */
    async updateUser(userID, userData) {
        const user = doc(this.users, userID);
        return updateDoc(user, userData);
    }

    /**
     * @param {string} userID
     * @returns {Promise<{ members?: string[], messages: string[] }>}
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
     */
    async getChatRoom(chatRoomID, alreadyFetchedData) {
        /**
         * @type {{ members: string[] }}
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
     * @returns {Promise<{authorID: string, createdOn: Date, text_content: string }[]>}
     */
    async getChatRoomMessages(chatRoomID) {
        return (
            await getDocs(query(this.chat_room_messages(chatRoomID)))
        ).docs.map((d) => d.data());
    }

    /**
     * @param {string} chatRoomID
     * @param {{ authorID: string, createdOn: Date, text_content: string }} messageData
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
     * @param {{ members: string[] }} chatRoomData
     */
    async createChatRoom(chatRoomID, chatRoomData) {
        const chat_room = doc(this.chat_rooms, chatRoomID);
        return setDoc(chat_room, chatRoomData);
    }

    /**
     * @param {string} chatRoomID
     */
    async deleteChatRoom(chatRoomID) {
        const chat_room = doc(this.chat_rooms, chatRoomID);
        return deleteDoc(chat_room);
    }

    /**
     * @param {{ authorID: string, createdOn: Date, media_url?: string, reactions: string[], text_content: string }} postData
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
         * @type {{ authorID: string, createdOn: Date, media_url?: string, reactions: string[], text_content: string }}
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
     */
    async getPostComments(postID) {
        /**
         * @type {{ authorID: string, createdOn: Date, text_content: string }[]}
         */
        const comments = (await getDocs(this.post_comments(postID))).docs.map(
            (d) => d.data()
        );

        return comments;
    }

    /**
     * @param {string} postID
     * @param {{ authorID: string, createdOn: Date, text_content: string }} commentData
     */
    async createPostComment(postID, commentData) {
        const comment = doc(this.post_comments(postID));

        await setDoc(comment, commentData);
        return comment.id;
    }

    async deletePostComment(postID, commentID) {
        const comment = doc(this.post_comments(postID), commentID);
        return deleteDoc(comment);
    }
}

const apiProvider = new ApiProvider();
export { apiProvider };
