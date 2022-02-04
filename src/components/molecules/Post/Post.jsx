import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Text, ImageComponent, Form } from '../..';
import { routes } from '../../../routes/Routes';
import { Icon } from '../../atoms/IconComponent/Icon';
import { dateFormat } from '../../../utils/format';

import './Post.scss';

export const Post = ({ children, date, name, avatar, profileID }) => {
    const navigate = useNavigate();
    const redirect = useCallback(() => {
        navigate(routes.Profile);
        //  TODO: PASS AN PROFILEID
    }, [navigate]);

    return (
        <div className='post__field'>
            <ImageComponent
                src={avatar}
                size='small'
                onClick={useCallback(() => {
                    redirect(`${routes.Feed}${routes.Profile}/${profileID}`);
                }, [profileID, redirect])}
            />
            <Text customClass='username' type='accent' size='medium'>
                {name}
            </Text>
            <Text size='small' customClass='date' type='primary'>
                {dateFormat(date)}
            </Text>
            <Text type='primary' customClass='message' size='medium'>
                {children}
            </Text>
            <Form placeholder='Add comment' type='comment' onSubmit />
            <Icon
                iconName='like'
                size='medium'
                className='like_button'
            />
            <Icon
                iconName='dislike'
                size='medium'
                className='dislike_button'
            />
            <Icon
                iconName='comment'
                size='medium'
                className='comment_button'
            />
            <hr />
        </div>
    );
};

Post.propTypes = {
    children: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    profileID: PropTypes.string.isRequired
};
