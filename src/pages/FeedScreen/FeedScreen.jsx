import { useState, useCallback } from 'react';
import { Modal } from '../../components/molecules/Modal/Modal';
import { Post } from '../../components/molecules/Post/Post';

export const FeedScreenPage = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = useCallback(() => {
        setShowModal((prev) => !prev);
    }, []);
    return (
        <>
            <div>This is feed screen</div>
            <button onClick={toggleModal}>Modal Button</button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>Children element</div>
            </Modal>
            <Post
                date={new Date()}
                name='atr'
                avatar='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                profileID='1'
            >
                Children element
            </Post>
        </>
    );
};
