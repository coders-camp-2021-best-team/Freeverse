import { useState, useCallback } from 'react';
import { Modal } from '../../components/molecules/Modal/Modal';
import { Post } from '../../components/molecules/Post/Post';
import { Form } from '../../components';

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
            <div className='post'>
                <Post
                    date={new Date()}
                    name='Norbert Nowak'
                    avatar='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    profileID='1'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    a blandit augue.
                </Post>
                <div className='form__field'>
                    <Form placeholder='Add comment' type='comment' onSubmit />
                </div>
            </div>
        </>
    );
};
