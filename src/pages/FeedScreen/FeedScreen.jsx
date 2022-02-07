import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useCreatePost, useUser } from '../../hooks';
import { Modal, Form, PostCollection } from '../../components';
import './FeedScreen.scss';
// TODO waiting for useLatestPosts hook

export const FeedScreenPage = () => {
    const user = useUser();
    const createPost = useCreatePost();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal((prev) => !prev);
    return (
        <>
            <div>This is feed screen</div>
            <button onClick={toggleModal}>Modal Button</button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>Children element</div>
            </Modal>
            <Form
                placeholder='Write something...'
                type='post'
                onSubmit={(data) =>
                    createPost({
                        authorID: user.data.uid,
                        createdOn: Timestamp.now(),
                        reactions: {},
                        text_content: data.post
                    })
                }
            />
            <PostCollection userPosts={[]} />
        </>
    );
};
