import { useEffect } from 'react';
import { useLogout } from '../../hooks';
import { Text } from '../../components';

export const LogoutPage = () => {
    const logout = useLogout();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <div className='page__logout'>
            <Text>Logging you out...</Text>
        </div>
    );
};
