import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Text } from '../../components';

import './Chat.scss';

export const ChatPage = ({ id }) => {
    const params = useParams();
    const chatID = id || params.id;

    return <Text>{chatID}</Text>;
};

ChatPage.propTypes = {
    id: PropTypes.string
};

ChatPage.defaultProps = {
    id: null
};
