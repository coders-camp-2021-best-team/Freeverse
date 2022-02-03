import { Link } from 'react-router-dom';
import { profileID } from '../../../App';
import { routes } from '../../../routes/Routes';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <Link to={routes.Home}>Home</Link>
            <Link to={`${routes.Feed}${routes.Profile}/${profileID}`}>
                Profile
            </Link>
            <Link to={`${routes.Feed}${routes.Chat}`}>Chat</Link>
            <Link to={`${routes.Feed}${routes.EditProfile}`}>Edit Profile</Link>
        </header>
    );
};
