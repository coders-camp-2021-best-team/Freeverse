import { useAuth } from '../../hooks';

export const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <>
            <div>This is profile page</div>
            <div>{`Hello, ${user.displayName}!`}</div>
            <pre>
                <code>{JSON.stringify(user, null, 4)}</code>
            </pre>
        </>
    );
};
