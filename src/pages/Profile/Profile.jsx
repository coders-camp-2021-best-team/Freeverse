import { useAuth } from '../../hooks';
import { Text } from '../../components';

export const ProfilePage = () => {
    const { user } = useAuth();
    if (user) {
        return <Text>{JSON.stringify(user)}</Text>;
    }
    return <Text>You are not logged in!</Text>;
};
