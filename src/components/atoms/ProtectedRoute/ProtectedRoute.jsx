import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (user.isLoading) {
        return null;
    }

    if (user.isSuccess && user.data) {
        return (
            <>
                {children}
                <Outlet />
            </>
        );
    }

    return <Navigate to={routes.Home} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

ProtectedRoute.defaultProps = {
    children: null
};
