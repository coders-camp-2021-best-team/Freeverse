import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRemoveComment, useUserDetails } from '../../../hooks';
import { Text, Icon } from '../..';

import './Comment.scss';
import '../../atoms/Text/Text.scss';

dayjs.extend(relativeTime);

export const Comment = ({ id, postID, authorID, date, children }) => {
    const { data: udData } = useUserDetails();
    const { data: authorData } = useUserDetails(authorID);
    const removeComment = useRemoveComment(postID, id);

    return (
        authorData && (
            <div className='comment'>
                <div className='comment__info'>
                    <Text
                        type='accent'
                        size='medium'
                        customClass='comment__info__username'
                    >
                        {authorData.data().displayName}
                    </Text>

                    <Text
                        type='secondary'
                        size='small'
                        customClass='comment__info__date'
                    >
                        {dayjs(date).fromNow()}
                    </Text>

                    {(udData?.id === authorID || udData?.data()?.admin) && (
                        <Icon
                            iconName='remove'
                            size='medium'
                            className='remove_button'
                            onClick={() => removeComment()}
                        />
                    )}
                </div>
                <div className='comment__text'>
                    <Text
                        type='primary'
                        size='medium'
                        customClass='comment__text__p'
                    >
                        {children}
                    </Text>
                </div>
            </div>
        )
    );
};

Comment.propTypes = {
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    authorID: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
};
