import PropTypes from 'prop-types';
import { Post } from '../..';

export const PostCollection = ({ userPosts }) => {
    return userPosts.map((user) => (
        <Post
            date={user.date}
            name={user.name}
            avatar={user.avatar}
            profileID={user.profileID}
        >
            {user.post}
        </Post>
    ));
};

PostCollection.propTypes = {
    userPosts: PropTypes.arrayOf(Object).isRequired
};
