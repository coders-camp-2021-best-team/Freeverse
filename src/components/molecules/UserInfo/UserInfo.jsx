import PropTypes from 'prop-types';
import { Icon, Text } from '../..';

import './UserInfo.scss';

export const UserInfo = ({ date, city, hobbies }) => {
    return (
        <div className='molecule__user__info'>
            <Text type='primary' size='extraLarge'>User Details</Text>
            <div>
                <Icon iconName='birthday' size='medium' />
                <Text type='primary' size='large'>{date}</Text>
            </div>
            <div>
                <Icon iconName='home' size='medium' />
                <Text type='primary' size='large'>{city}</Text>
            </div>
            <div>
                <Icon iconName='googleController' size='medium' />
                <Text type='primary' size='large'>{hobbies}</Text>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    hobbies: PropTypes.string.isRequired
};
