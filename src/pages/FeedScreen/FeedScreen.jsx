import { useState, useCallback } from 'react';
import { Modal } from '../../components';

import './FeedScreen.scss';

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
        </>
    );
};
