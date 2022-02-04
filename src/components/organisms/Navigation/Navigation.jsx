import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { InformationRow } from '../../molecules';
import { Text } from '../../atoms';
import { routes } from '../../../routes/Routes';
import './Navigation.scss';

// Add onClick function (log out function)

const NAV_ITEMS = [
    {
        src: 'user',
        label: 'Profile',
        path: routes.EditProfile
    },
    {
        src: 'comment',
        label: 'Chat room',
        path: routes.Chat
    },
    { src: 'power', label: 'Log out', path: routes.Home } // change path to onClick for logout
];

export const Navigation = ({ isOpen, userName }) => {
    return (
        <div
            className={`navigation ${
                isOpen ? 'dropdown__open' : 'dropdown__close'
            }`}
        >
            <Text customClass='navigation__username'>{userName}</Text>
            {NAV_ITEMS.map((navItem) => (
                <NavLink to={navItem.path} key={navItem.src}>
                    <InformationRow
                        iconName={navItem.src}
                        onClick={navItem.onClick}
                    >
                        {navItem.label}
                    </InformationRow>
                </NavLink>
            ))}
        </div>
    );
};

Navigation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
};
