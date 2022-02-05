import { Navigate } from 'react-router';
import { getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { routes } from '../../routes/Routes';
import { Button } from '../../components';
import { useUser, useLogin } from '../../hooks';

import { ReactComponent as Logo } from '../../images/logo.svg';
import './Home.scss';
import { apiService } from '../../api';

export const HomePage = () => {
    const user = useUser();
    const login = useLogin();

    if (user.isLoading) return null;

    if (user.data) return <Navigate to={routes.Feed} replace />;

    return (
        <div className='home__page'>
            <Logo className='home__page__logo' />
            <Button
                text='LOG IN WITH GOOGLE'
                onClick={() => {
                    login().then(async (cred) => {
                        const u = apiService.user(cred.user.uid);
                        const cu = (await getDoc(u)).data() || {};

                        await setDoc(u, {
                            admin: cu.admin || false,
                            displayName:
                                cu.displayName || cred.user.displayName,
                            hobbies: cu.hobbies || [],
                            profile_picture_url:
                                cu.profile_picture_url || cred.user.photoURL,
                            background_picture_url:
                                cu.background_picture_url || null,
                            birthday: cu.birthday || Timestamp.now()
                        });
                    });
                }}
            />
        </div>
    );
};
