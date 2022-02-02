import { NavLink } from 'react-router-dom';
import { InformationRow } from '../../molecules/InformationRow/InformationRow';
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
    { src: 'power', label: 'Log out', path: routes.Home }
];

export const Navigation = () => {
    return (
        <>
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
        </>
    );
};
