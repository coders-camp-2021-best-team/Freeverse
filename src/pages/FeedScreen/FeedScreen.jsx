import { useState, useCallback } from 'react';
import { Modal } from '../../components/molecules/Modal/Modal';
import { userPosts } from '../../utils/Mocks';
import { PostCollection } from '../../components';
import { Form } from '../../components/organisms/Form/Form';

import './FeedScreen.scss';

export const FeedScreenPage = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = useCallback(() => {
        setShowModal((prev) => !prev);
    }, []);
    const onSubmit = (values) => {
        // TODO temporary, connect with API
        return values;
    };
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
                onSubmit={onSubmit}
            />
            <PostCollection userPosts={userPosts} />
        </>
    );
};
