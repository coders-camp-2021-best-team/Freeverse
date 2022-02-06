import { Field, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { Button, Text } from '../..';
import { useCreateChatRoom, useUser } from '../../../hooks';
import { routes } from '../../../routes/Routes';

import './ChatCreatorForm.scss';
import '../Form/Form.scss';

export const ChatCreatorForm = () => {
    const user = useUser();
    const userID = user.data.uid;
    const createChatRoom = useCreateChatRoom();

    const navigate = useNavigate();
    const redirectToChatRoom = (id) => navigate(`${routes.Chat}/${id}`);

    return (
        <div className='organism__chat_room_creator'>
            <Formik
                initialValues={{
                    name: '',
                    visibility: 'public'
                }}
                onSubmit={(data) =>
                    createChatRoom({
                        name: data.name,
                        admins: [userID],
                        members: data.visibility === 'public' ? null : [userID]
                    }).then((v) => redirectToChatRoom(v.id))
                }
            >
                {({ values, handleChange, handleSubmit }) => (
                    <div className='organisms__chat_creator form'>
                        <Text type='primary' size='large'>
                            Chat Room Creator
                        </Text>
                        <form>
                            <Field
                                as='textarea'
                                name='name'
                                placeholder='Chat Room name'
                                onChange={handleChange}
                            />

                            <label htmlFor='public'>
                                <input
                                    type='radio'
                                    name='visibility'
                                    value='public'
                                    id='public'
                                    checked={values.visibility === 'public'}
                                    onChange={handleChange}
                                />
                                <Text type='primary' size='medium'>
                                    Public
                                </Text>
                            </label>

                            <label htmlFor='private'>
                                <input
                                    type='radio'
                                    name='visibility'
                                    value='private'
                                    id='private'
                                    checked={values.visibility === 'private'}
                                    onChange={handleChange}
                                />
                                <Text type='primary' size='medium'>
                                    Private
                                </Text>
                            </label>

                            <Button
                                type='submit'
                                text='Create Room'
                                onClick={handleSubmit}
                            />
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
};
