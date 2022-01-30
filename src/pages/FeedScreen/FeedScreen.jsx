import { useState } from 'react';
import { Modal } from '../../components/molecules/Modal/Modal';

export const FeedScreenPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div>This is feed screen</div>
            <button onClick={setShowModal((prev) => !prev)}>
                Modal Button
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>Children element</div>
            </Modal>
        </>
    );
};
