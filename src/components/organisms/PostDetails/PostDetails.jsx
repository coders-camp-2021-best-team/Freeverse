import PropTypes from 'prop-types';
import { Post, Comment } from '../..';
import { usePostComments } from '../../../hooks';

export const PostDetails = ({ postID }) => {
    const comments = usePostComments(postID);

    return (
        comments.isSuccess && (
            <div className='molecule__post_details'>
                <Post postID={postID} />
                <div className='molecule__post_details__comments'>
                    {comments.data.docs.map((comment) => (
                        <Comment
                            authorID={comment.data().authorID}
                            date={comment.data().createdOn.toDate()}
                            key={comment.id}
                        >
                            {comment.data().text_content}
                        </Comment>
                    ))}
                </div>
            </div>
        )
    );
};

PostDetails.propTypes = {
    postID: PropTypes.string.isRequired
};
