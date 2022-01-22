import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text/Text';
import '../../atoms/Text/Text.scss';
import './Comment.scss';

export const Comment = ({ username, date, commentText }) => {
    return (
        <div className='comment'>
            <div className='comment__info'>
                <Text type='primary' size='small'>
                    {date}
                </Text>
                <Text type='accent' size='medium'>
                    {username}
                </Text>
            </div>
            <div className='comment__text'>
                <Text type='primary' size='medium'>
                    {commentText}
                </Text>
            </div>
        </div>
    );
};

Comment.propTypes = {
    commentText: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};
