import { Navigate } from 'react-router';
import { routes } from '../../routes/Routes';
import { Button } from '../../components';
import { useAuth } from '../../hooks';

import { ReactComponent as Logo } from '../../images/logo.svg';
import './Home.scss';

export const HomePage = () => {
    const { user, login } = useAuth();

    return user.isSuccess && user.data ? (
        <Navigate to={routes.Feed} replace />
    ) : (
        <div className='home__page'>
            <Logo className='home__page__logo' />
            <Button text='LOG IN WITH GOOGLE' onClick={login} />
        </div>
    );
};
