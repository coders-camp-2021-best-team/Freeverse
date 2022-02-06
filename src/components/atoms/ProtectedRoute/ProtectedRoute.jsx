import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const ProtectedRoute = ({ children }) => {
    const user = useUser();

    if (user.data) {
        return children;
    }

    return <Navigate to={routes.Home} replace />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

ProtectedRoute.defaultProps = {
    children: null
};
