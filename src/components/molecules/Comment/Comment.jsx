import PropTypes from 'prop-types';
import { Dayjs } from 'dayjs';
import { Text } from '../../atoms/Text/Text';
import '../../atoms/Text/Text.scss';
import './Comment.scss';

export const Comment = ({ username, date, children }) => {
    return (
        <div className='comment'>
            <div className='comment__info'>
                <Text
                    type='primary'
                    size='small'
                    customClass='comment__info__date'
                >
                    <Dayjs format='DD MM YYYY hh:mm'>{date}</Dayjs>
                </Text>
                <Text
                    type='accent'
                    size='medium'
                    customClass='comment__info__username'
                >
                    {username}
                </Text>
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
    );
};

Comment.propTypes = {
    children: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};
