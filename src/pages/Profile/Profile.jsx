import { useParams } from 'react-router';
import { ImageComponent, UserInfo, UserDetails } from '../../components';
import { useUserDetails } from '../../hooks';
import DEFAULT_BACKGROUND from '../../images/background.png';

import './Profile.scss';

export const ProfilePage = () => {
    const params = useParams();
    const userID = params.id;
    const { data: userData } = useUserDetails(userID);
    const background = userData.background_image_url
        ? userData.background_image_url
        : DEFAULT_BACKGROUND;

    return (
        <div className='profile__page'>
            <div>
                <ImageComponent
                    customClass='background__image'
                    src={background}
                />
            </div>
            <UserInfo userID={userID} customClass='profile__page__user__info' />
            <UserDetails userID={userID} />
        </div>
    );
};
