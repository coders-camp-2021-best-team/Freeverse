import { useParams } from 'react-router';
import { ImageComponent, UserInfo } from '../../components';
import { useUserDetails } from '../../hooks';

import './Profile.scss';

export const ProfilePage = () => {
    const params = useParams();
    const userID = params.id;
    const { data: userData } = useUserDetails(userID);

    return (
        <div className='profile__page'>
            <div>
                <ImageComponent
                    customClass='background__image'
                    src={userData.background_picture_url}
                />
            </div>
            <UserInfo userID={userID} customClass='profile__page__user__info' />
        </div>
    );
};
