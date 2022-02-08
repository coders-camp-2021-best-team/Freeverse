import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { Post, Comment } from '../..';
import { usePostComments } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const PostDetails = ({ postID }) => {
    const { data: commentsData, isLoading } = usePostComments(postID);

    if (isLoading) {
        return null;
    }

    if (commentsData) {
        const comments_arr = commentsData.docs.map((d) => ({
            id: d.id,
            data: d.data()
        }));

        return (
            <div className='molecule__post_details'>
                <Post postID={postID} />

                <div className='molecule__post_details__comments'>
                    {comments_arr.map(({ id, data }) => (
                        <Comment
                            id={id}
                            postID={postID}
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
