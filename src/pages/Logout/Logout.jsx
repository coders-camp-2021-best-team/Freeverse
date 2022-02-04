import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks';
import { Text } from '../../components';
import { routes } from '../../routes/Routes';

export const LogoutPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout().then(() => {
            navigate(routes.Home, { replace: true });
        });
    }, [logout, navigate]);

    return (
        <div className='page__logout'>
            <Text>Logging you out...</Text>
        </div>
    );
};
