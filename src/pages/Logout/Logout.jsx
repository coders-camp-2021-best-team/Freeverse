import { useEffect } from 'react';
import { useAuth } from '../../hooks';
import { Text } from '../../components';

export const LogoutPage = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <div className='page__logout'>
            <Text>Logging you out...</Text>
        </div>
    );
};
