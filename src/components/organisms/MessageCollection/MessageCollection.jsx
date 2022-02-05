import PropTypes from 'prop-types';
import { MessageComponent } from '../..';

/**
 * @param {{ userMsgs: import('../../../api/types').Message[] }} param0
 */
export const MessageCollection = ({ userMsgs }) => {
    const user = {};
    return (
        user.isSuccess &&
        userMsgs.map(({ authorID, createdOn, text_content }) => (
            <MessageComponent
                date={createdOn.toDate()}
                isYours={user.data.uid === authorID}
                profileID={authorID}
                key={createdOn.toMillis()}
            >
                {text_content}
            </MessageComponent>
        ))
    );
};

MessageCollection.propTypes = {
    userMsgs: PropTypes.arrayOf(Object).isRequired
};
