import { useState } from 'react';
import { Modal, Form } from '../../components';

import './FeedScreen.scss';

export const FeedScreenPage = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal((prev) => !prev);
    const onSubmit = (value) => {
        return value;
        // TODO Add logic to onSubmit function
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
        </>
    );
};
