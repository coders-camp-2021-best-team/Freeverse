import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useUser } from '../../../hooks';
import { MessageComponent } from '../../molecules';

/**
 * @param {{ userMsgs: import('../../../api/types').Message[] }} param0
 */
export const MessageCollection = ({ userMsgs }) => {
    const user = useUser();

    const messagesRef = useRef(null);

    useEffect(() => {
        const scrollToBottom = () => {
            messagesRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: 'smooth'
            });
        };

        if (messagesRef) {
            scrollToBottom();
        }
    }, [userMsgs]);

    return (
        <div className='messages' ref={messagesRef}>
            {userMsgs.map(({ authorID, createdOn, text_content }) => (
                <MessageComponent
                    date={createdOn.toDate()}
                    isYours={user.data.uid === authorID}
                    profileID={authorID}
                    key={createdOn.toMillis()}
                >
                    {text_content}
                </MessageComponent>
            ))}
        </div>
    );
};

MessageCollection.propTypes = {
    userMsgs: PropTypes.arrayOf(Object).isRequired
};
