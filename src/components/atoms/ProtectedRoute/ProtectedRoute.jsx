import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const auth = true; // TODO: temporary

export const ProtectedRoute = ({ children }) => {
    return auth ? children : <Navigate to='/' />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

ProtectedRoute.defaultProps = {
    children: null
};
