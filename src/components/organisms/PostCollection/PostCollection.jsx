import PropTypes from 'prop-types';
import { Post } from '../..';

export const PostCollection = ({ userPosts }) => {
    return userPosts.map(({ postID, text_content }) => (
        <Post postID={postID}>{text_content}</Post>
    ));
};

PostCollection.propTypes = {
    userPosts: PropTypes.arrayOf(Object).isRequired
};
