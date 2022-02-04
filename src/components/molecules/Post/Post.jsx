import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { Text, ImageComponent, Form } from '../..';
import { routes } from '../../../routes/Routes';
import { Icon } from '../../atoms/IconComponent/Icon';
import { dateFormat } from '../../../utils/format';

import './Post.scss';
import {
    useAuth,
    usePost,
    usePostComments,
    useUserDetails
} from '../../../hooks';

export const Post = ({ postID }) => {
    const navigate = useNavigate();
    const redirect = useCallback(() => {
        navigate(routes.Profile);
        //  TODO: PASS AN PROFILEID
    }, [navigate]);

    const { user: auth } = useAuth();
    const post = usePost(postID);
    const comments = usePostComments(postID);
    const author = useUserDetails(post.data?.data()?.authorID);

    return (
        auth.isSuccess &&
        post.isSuccess &&
        comments.isSuccess &&
        author.isSuccess && (
            <div className='post__field'>
                <ImageComponent
                    src={author.data.data().profile_picture_url}
                    size='small'
                    onClick={() =>
                        redirect(
                            `${routes.Feed}${routes.Profile}/${
                                post.data.data().authorID
                            }`
                        )
                    }
                />
                <Text customClass='username' type='accent' size='medium'>
                    {author.data.data().displayName}
                </Text>
                <Text size='small' customClass='date' type='primary'>
                    {dateFormat(post.data.data().createdOn.toDate())}
                </Text>
                <Text type='primary' customClass='message' size='medium'>
                    {post.data.data().text_content}
                </Text>
                <Form
                    placeholder='Add comment'
                    type='comment'
                    onSubmit={(data) =>
                        comments.create({
                            authorID: auth.data.uid,
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
        )
    );
};

Post.propTypes = {
    postID: PropTypes.string.isRequired
};
