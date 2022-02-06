import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Text } from '../../components';

export const ProfilePage = ({ id }) => {
    const params = useParams();
    const profileID = id || params.id;

    return <Text>{profileID}</Text>;
};

ProfilePage.propTypes = {
    id: PropTypes.string
};

ProfilePage.defaultProps = {
    id: null
};
