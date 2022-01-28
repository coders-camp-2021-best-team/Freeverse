import { Timestamp } from 'firebase/firestore';

export interface User {
    admin: boolean;

    displayName: string;

    profile_picture_url: string;
    background_picture_url?: string;

    birthday?: Timestamp;

    hobbies: string[];
}

export interface Post {
    authorID: string;
    createdOn: Timestamp;

    media_url?: string;
    text_content?: string;

    reactions: {
        [key: string]: ReactionType;
    };
}

export interface PostFull extends Post {
    id: string;
    likes: number;
    dislikes: number;
}

export type ReactionType = 'LIKE' | 'DISLIKE';

export interface Comment {
    authorID: string;
    createdOn: Timestamp;

    text_content: string;
}

export interface ChatRoom {
    members: string[];
    admins: string[];
}

export interface ChatRoomFull extends ChatRoom {
    name: string;
}

export interface Message extends Comment {}
