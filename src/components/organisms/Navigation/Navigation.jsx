import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { InformationRow } from '../../molecules';
import { Text } from '../../atoms';
import { useUser, useUserDetails } from '../../../hooks';
import { routes } from '../../../routes/Routes';
import './Navigation.scss';

const NAV_ITEMS = [
    {
        src: 'user',
        label: 'My Profile',
        path: (id) => `${routes.Profile}/${id}`
    },
    {
        src: 'comment',
        label: 'Chat Rooms',
        path: routes.ChatSelector
    },
    { src: 'power', label: 'Log out', path: routes.Logout }
];

export const Navigation = ({ isOpen, navItemCallback }) => {
    const user = useUser();
    const { data: udData } = useUserDetails();

    if (!udData?.data()) {
        return null;
    }

    const { displayName } = udData.data();

    return (
        <div
            className={`navigation ${
                isOpen ? 'dropdown__open' : 'dropdown__close'
            }`}
        >
            <Text customClass='navigation__username'>{displayName}</Text>
            {NAV_ITEMS.map((navItem) => (
                <NavLink
                    to={
                        typeof navItem.path === 'function'
                            ? navItem.path(user.data.uid)
                            : navItem.path
                    }
                    key={navItem.src}
                    className='navigation__link'
                >
                    <InformationRow
                        iconName={navItem.src}
                        onClick={navItemCallback}
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
    navItemCallback: PropTypes.func.isRequired
};
