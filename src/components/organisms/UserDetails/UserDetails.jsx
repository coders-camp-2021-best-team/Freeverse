// import { Timestamp } from 'firebase/firestore'; TODAY'S DATE
import PropTypes from 'prop-types';
import { InformationRow, Text } from '../..';
import { useUserDetails } from '../../../hooks';
import { dateFormat } from '../../../utils';

import './UserDetails.scss';

export const UserDetails = ({ userID }) => {
    const { data: userData } = useUserDetails(userID);

    let birthday = 'Not available';
    // userData.birthday = Timestamp.now(); TODAY'S DATE
    if (userData.birthday) {
        const date = userData.birthday.toDate();
        birthday = dateFormat(date, 'DD.MM.YYYY');
    }

    const hobbies = userData.hobbies ? userData.hobbies.join(', ') : '';

    return (
        <div>
            <Text size='medium'>User Details</Text>
            <InformationRow iconName='birthday'>{birthday}</InformationRow>
            {/* TODO when city data will be available */}
            <InformationRow iconName='home'>Not available</InformationRow>
            <InformationRow iconName='googleController'>
                {hobbies}
            </InformationRow>
        </div>
    );
};

UserDetails.propTypes = {
    userID: PropTypes.string.isRequired
};
