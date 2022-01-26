import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to={routes.Home} replace />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};
