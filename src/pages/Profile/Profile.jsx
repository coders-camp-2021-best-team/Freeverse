// import { useParams } from 'react-router';
import { userExample } from '../../utils/Mocks';
import { ImageComponent, UserInfo } from '../../components';
import './Profile.scss';

export const ProfilePage = () => {
    // const params = useParams();
    // const userID = params.id;

    const user = userExample;

    return (
        <div className='profile__page'>
            <div>
                <ImageComponent
                    customClass='background__image'
                    src={user.background_picture_url}
                />
            </div>
            <UserInfo
                customClass='profile__page__user__info'
                displayName={user.displayName}
                profilePictureUrl={user.profile_picture_url}
            />
        </div>
    );
};
