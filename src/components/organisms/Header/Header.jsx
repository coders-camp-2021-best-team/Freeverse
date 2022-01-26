import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { routes } from '../../../routes/Routes';

export const Header = () => {
    const { user } = useAuth();

    return (
        <header>
            <Link to={routes.Home}>Home</Link>
            <Link to={`${routes.Profile}/${user?.uid}`}>Profile</Link>
            <Link to={routes.Chat}>Chat</Link>
            <Link to={routes.EditProfile}>Edit Profile</Link>
        </header>
    );
};
