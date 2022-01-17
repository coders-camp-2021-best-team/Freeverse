import { Link } from 'react-router-dom';
import { profileID } from '../../../App';

export const Header = () => {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to={`/site/profile/${profileID}`}>Profile</Link>
            <Link to='/site/chat'>Chat</Link>
            <Link to='/site/edit-profile'>Edit Profile</Link>
        </header>
    );
};
