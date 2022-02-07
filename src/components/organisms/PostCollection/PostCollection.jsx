import PropTypes from 'prop-types';
import { Post } from '../..';

/**
 * @param {{ posts: import('firebase/firestore').QueryDocumentSnapshot<import('../../../api/types').Post>[] }} param0
 */
export const PostCollection = ({ posts }) => {
    return posts.map((post) => <Post key={post.id} postID={post.id} />);
};

PostCollection.propTypes = {
    posts: PropTypes.arrayOf(Object).isRequired
};
