import PropTypes from 'prop-types';
import { MessageComponent } from '../..';

export const MessageCollection = (usersMsgs) => {
    return usersMsgs.usersMsgs.map((user) => (
        <MessageComponent
            date={user.date}
            name={user.name}
            avatar={user.avatar}
            isYours={user.isYour}
            profileID={user.profileId}
            key={user.ID}
        >
            {user.message}
        </MessageComponent>
    ));
};

MessageCollection.propTypes = {
    usersMsgs: PropTypes.instanceOf(Object).isRequired
};
