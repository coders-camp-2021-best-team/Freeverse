import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { Modal, PostDetails } from '../../components';
import { routes } from '../../routes/Routes';

export const PostDetailsPage = ({ id }) => {
    const params = useParams();
    const postID = id || params.id;
    const navigate = useNavigate();

    return (
        <Modal
            showModal
            setShowModal={(state) => {
                if (state) navigate(routes.Home, { replace: true });
            }}
        >
            <PostDetails postID={postID} />
        </Modal>
    );
};

PostDetailsPage.propTypes = {
    id: PropTypes.string
};

PostDetailsPage.defaultProps = {
    id: null
};
