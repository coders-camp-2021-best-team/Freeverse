import PropTypes from 'prop-types';
import { Post } from '../..';

export const PostCollection = ({ userPosts }) => {
    return userPosts.map((postID) => <Post postID={postID} />);
};

PostCollection.propTypes = {
    userPosts: PropTypes.arrayOf(Object).isRequired
};
