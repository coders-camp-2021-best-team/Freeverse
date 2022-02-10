import { Timestamp } from 'firebase/firestore';
import PropTypes from 'prop-types';
import { InformationRow, Text } from '../..';
import { useUserDetails } from '../../../hooks';
import { dateFormat } from '../../../utils';

import './UserDetails.scss';

export const UserDetails = ({ userID }) => {
    const { data: userData } = useUserDetails(userID);

    if (!userData?.data()) {
        return null;
    }

    const { birthday, hobbies, city } = userData.data();

    let birthday_str = dateFormat(birthday?.toDate(), 'DD.MM.YYYY');
    const age = Timestamp.now() - birthday;
    const years_old = Math.floor(age / 60 / 60 / 24 / 365);
    birthday_str += ` (${years_old} yo)`;

    const hobbies_str = hobbies.join(', ');

    return (
        <div className='userdetails'>
            <Text customClass='textdetails' size='medium'>
                User Details
            </Text>
            <div className='details'>
                <InformationRow iconName='birthday'>
                    {birthday_str || 'Not available'}
                </InformationRow>

                <InformationRow iconName='home'>
                    {city || 'Not available'}
                </InformationRow>

                <InformationRow iconName='googleController'>
                    {hobbies_str || 'Not available'}
                </InformationRow>
            </div>
        </div>
    );
};

UserDetails.propTypes = {
    userID: PropTypes.string.isRequired
};
