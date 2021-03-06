import PropTypes from 'prop-types';
import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Text, Form, Icon, InformationRow, UserInfo } from '../..';
import { countReactions } from '../../../utils';
import {
    useCreateComment,
    usePost,
    usePostReactions,
    useReactOnPost,
    useRemovePost,
    useUser,
    useUserDetails
} from '../../../hooks';
import { routes } from '../../../routes/Routes';

import './Post.scss';

dayjs.extend(relativeTime);

/**
 * @param {{ postID: string, postData: import('../../../api/types').Post }} param0
 */
export const Post = ({ postID }) => {
    const navigate = useNavigate();
    const user = useUser();
    const { data: udData } = useUserDetails();

    const [optionsDropdownIsOpen, setIsOpen] = useState(false);

    const createComment = useCreateComment(postID);
    const { data: postData } = usePost(postID);
    const removePost = useRemovePost(postID);
    const { data: reactionsData } = usePostReactions(postID);
    const react = useReactOnPost(postID);

    if (!postData?.data() || !reactionsData || !udData.data()) {
        return null;
    }

    const { authorID, createdOn, text_content } = postData.data();

    const { likes, likedBy, dislikes, dislikedBy } = countReactions(
        reactionsData.docs.map((d) => ({ id: d.id, data: d.data() })),
        user.data.uid
    );

    return (
        <div className='post__field'>
            <UserInfo userID={authorID} onPost />

            <Text size='small' customClass='date' type='primary'>
                {dayjs(createdOn.toDate()).fromNow()}
            </Text>

            <Text type='primary' customClass='message' size='large'>
                {text_content}
            </Text>

            <Form
                placeholder='Add comment'
                type='comment'
                onSubmit={(data) =>
                    createComment({
                        authorID: user.data.uid,
                        createdOn: Timestamp.now(),
                        text_content: data.comment
                    })
                }
            />

            <div className='likes'>
                <Icon
                    iconName='like'
                    size='medium'
                    className={`like_button${likedBy ? '_active' : ''}`}
                    onClick={() => react({ type: 'LIKE' })}
                />

                <Text type='secondary' size='medium' customClass='counter'>
                    {likes.toString()}
                </Text>
            </div>

            <div className='dislikes'>
                <Icon
                    iconName='dislike'
                    size='medium'
                    className={`dislike_button${dislikedBy ? '_active' : ''}`}
                    onClick={() => react({ type: 'DISLIKE' })}
                />

                <Text type='secondary' size='medium' customClass='counter'>
                    {dislikes.toString()}
                </Text>
            </div>

            <Icon
                iconName='comment'
                size='medium'
                className='comment_button'
                onClick={() => navigate(`${routes.Post}/${postID}`)}
            />

            {(authorID === user.data.uid || udData.data().admin) && (
                <div className='dropdown'>
                    <Icon
                        iconName='threedots'
                        className='dropdown__toggle'
                        onClick={() => setIsOpen((open) => !open)}
                    />

                    <div
                        className={`dropdown__content ${
                            optionsDropdownIsOpen
                                ? 'dropdown__open'
                                : 'dropdown__closed'
                        }`}
                    >
                        <InformationRow
                            iconName='edit'
                            onClick={() =>
                                navigate(`${routes.EditPost}/${postID}`)
                            }
                        >
                            {`Edit Post ${
                                udData.data().admin &&
                                authorID !== user.data.uid
                                    ? '(as admin)'
                                    : ''
                            }`}
                        </InformationRow>

                        <InformationRow
                            iconName='remove'
                            onClick={() => removePost()}
                        >
                            {`Remove Post ${
                                udData.data().admin &&
                                authorID !== user.data.uid
                                    ? '(as admin)'
                                    : ''
                            }`}
                        </InformationRow>
                    </div>
                </div>
            )}
            <hr />
        </div>
    );
};

Post.propTypes = {
    postID: PropTypes.string.isRequired
};
