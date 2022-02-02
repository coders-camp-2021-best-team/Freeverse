import { MessageCollection } from '../../components';
import { usersMsgs } from '../../utils/Mocks';

export const ChatPage = () => {
    return <MessageCollection usersMsgs={usersMsgs} />;
};
