import { Field, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import { Button, Modal, Text } from '../../components';
import { usePost, useUpdatePost } from '../../hooks';
import { routes } from '../../routes/Routes';

import './EditPost.scss';
import '../../components/organisms/Form/Form.scss';

export const EditPostPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const postID = params.id;

    const redirect = () => navigate(`${routes.Post}/${postID}`);

    const { data: postData } = usePost(postID);
    const updatePost = useUpdatePost(postID);

    if (!postData?.data()) {
        return null;
    }

    return (
        <Modal
            showModal
            setShowModal={(state) => {
                if (state) redirect();
            }}
        >
            <Formik
                initialValues={{
                    text_content: postData.data().text_content
                }}
                onSubmit={({ text_content }) =>
                    updatePost({ text_content }).then(redirect)
                }
            >
                {({ values, handleChange, handleSubmit }) => (
                    <div className='page__edit_post form'>
                        <Text type='primary' size='large'>
                            Post Editor
                        </Text>
                        <form>
                            <Field
                                as='textarea'
                                name='text_content'
                                placeholder='Post Content'
                                onChange={handleChange}
                            >
                                {values.text_content}
                            </Field>
                            <Button
                                type='submit'
                                text='Update Post'
                                onClick={handleSubmit}
                            />
                        </form>
                    </div>
                )}
            </Formik>
        </Modal>
    );
};
