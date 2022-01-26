import { InformationRow } from '../../molecules/InformationRow/InformationRow';

// Add onClick function (go to the page)

const NAV_ITEMS = [
    {
        src: 'avatar',
        label: 'Edit profile',
        onClick: () => console.log('path edit')
    },
    {
        src: 'comment',
        label: 'Chat room',
        onClick: () => console.log('path chat')
    },
    { src: 'power', label: 'Log out', onClick: () => console.log('power') }
];

export const Navigation = () => {
    return (
        <>
            {NAV_ITEMS.map((navItem) => (
                <InformationRow
                    src={navItem.src}
                    onClick={navItem.onClick}
                    key={navItem.src}
                >
                    {navItem.label}
                </InformationRow>
            ))}
        </>
    );
};
