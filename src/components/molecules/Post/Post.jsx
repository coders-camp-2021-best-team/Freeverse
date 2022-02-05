import PropTypes from 'prop-types';
import { Timestamp } from 'firebase/firestore';
import { Navigate } from 'react-router';
import { Text, Form } from '../..';
import { Icon } from '../../atoms/IconComponent/Icon';
import { dateFormat } from '../../../utils';
import { useCreateComment, usePost, useUser } from '../../../hooks';
import { UserInfo } from '..';
import { routes } from '../../../routes/Routes';

import './Post.scss';

export const Post = ({ postID }) => {
    const user = useUser();
    const post = usePost(postID);
    const createComment = useCreateComment(postID);

    if (post.isLoading) {
        return null;
    }

    if (post.data.data()) {
        const { authorID, createdOn, text_content } = post.data.data();

        // TODO: render reaction counters
        // const { likes, dislikes } = countReactions(reactions);

        return (
            <div className='post__field'>
                <UserInfo userID={authorID} onPost />

                <Text size='small' customClass='date' type='primary'>
                    {dateFormat(createdOn.toDate())}
                </Text>

                <Text type='primary' customClass='message' size='medium'>
                    {text_content}
                </Text>

                <Form
                    placeholder='Add comment'
                    type='comment'
                    onSubmit={(data) =>
                        createComment({
                            authorID: user.data.uid,
                            createdOn: Timestamp.now(),
                            reactions: {},
                            text_content: data.comment
                        })
                    }
                />

                <Icon iconName='like' size='medium' className='like_button' />

                <Icon
                    iconName='dislike'
                    size='medium'
                    className='dislike_button'
                />

                <Icon
                    iconName='comment'
                    size='medium'
                    className='comment_button'
                />
                <hr />
            </div>
        );
    }

    return <Navigate to={routes.NotFound} replace />;
};

Post.propTypes = {
    postID: PropTypes.string.isRequired
};
