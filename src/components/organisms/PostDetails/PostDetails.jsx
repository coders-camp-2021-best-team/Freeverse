import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { Post, Comment } from '../..';
import { usePostComments } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const PostDetails = ({ postID }) => {
    const comments = usePostComments(postID);

    if (comments.isLoading) return null;

    if (comments.data) {
        const comments_arr = comments.data.docs.map((d) => ({
            id: d.id,
            data: d.data()
        }));

        return (
            <div className='molecule__post_details'>
                <Post postID={postID} />

                <div className='molecule__post_details__comments'>
                    {comments_arr.map(({ id, data }) => (
                        <Comment
                            authorID={data.authorID}
                            date={data.createdOn.toDate()}
                            key={id}
                        >
                            {data.text_content}
                        </Comment>
                    ))}
                </div>
            </div>
        );
    }

    return <Navigate to={routes.NotFound} replace />;
};

PostDetails.propTypes = {
    postID: PropTypes.string.isRequired
};
