import { Timestamp } from 'firebase/firestore';

export interface User {
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
    likes: number;
    dislikes: number;
    comments: Comment[];
}

export type ReactionType = 'LIKE' | 'DISLIKE';

export interface Comment {
    authorID: string;
    createdOn: Timestamp;

    text_content: string;
}

export interface ChatRoom {
    members: string[];
}

export interface ChatRoomFull extends ChatRoom {
    id: string;
    messages: Message[];
}

export interface Message extends Comment {}
