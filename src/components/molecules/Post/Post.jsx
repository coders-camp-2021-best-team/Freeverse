import PropTypes from 'prop-types';
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { Text, Form, Icon } from '../..';
import { countReactions, dateFormat } from '../../../utils';
import {
    useCreateComment,
    usePost,
    usePostReactions,
    useReactOnPost,
    useRemovePost,
    useUser,
    useUserDetails
} from '../../../hooks';
import { UserInfo } from '..';
import { routes } from '../../../routes/Routes';

import './Post.scss';

/**
 *
 * @param {{ postID: string, postData: import('../../../api/types').Post }} param0
 * @returns
 */
export const Post = ({ postID }) => {
    const navigate = useNavigate();
    const user = useUser();
    const { data: udData } = useUserDetails();

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
                {dateFormat(createdOn.toDate())}
            </Text>

            <Text type='primary' customClass='message' size='medium'>
                {text_content}
            </Text>

            <Text type='secondary' size='small'>
                {`Likes: ${likes}`}
            </Text>

            <Text type='secondary' size='small'>
                {`Dislikes: ${dislikes}`}
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

            <Icon
                iconName='like'
                size='medium'
                className={`like_button${likedBy ? '_active' : ''}`}
                onClick={() => react({ type: 'LIKE' })}
            />

            <Icon
                iconName='dislike'
                size='medium'
                className={`dislike_button${dislikedBy ? '_active' : ''}`}
                onClick={() => react({ type: 'DISLIKE' })}
            />

            <Icon
                iconName='comment'
                size='medium'
                className='comment_button'
                onClick={() => navigate(`${routes.Post}/${postID}`)}
            />

            {(authorID === user.data.uid || udData.data().admin) && (
                <Icon
                    iconName='remove'
                    size='medium'
                    className='remove_button'
                    onClick={() => removePost()}
                />
            )}
            <hr />
        </div>
    );
};

Post.propTypes = {
    postID: PropTypes.string.isRequired
};
