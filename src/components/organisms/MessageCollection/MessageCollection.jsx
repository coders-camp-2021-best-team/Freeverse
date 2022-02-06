import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { MessageComponent } from '../..';
import { useUser } from '../../../hooks';

/**
 * @param {{ userMsgs: import('../../../api/types').Message[] }} param0
 */
export const MessageCollection = ({ userMsgs }) => {
    const user = useUser();

    const messageEl = useRef(null);
    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', (event) => {
                const target = event.currentTarget;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, []);

    return (
        <div className='messages' ref={messageEl}>
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
