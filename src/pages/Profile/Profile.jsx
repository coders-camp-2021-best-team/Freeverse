import { useParams } from 'react-router';
import {
    ImageComponent,
    UserInfo,
    UserDetails,
    PostCollection,
    Text
} from '../../components';
import { useUserDetails } from '../../hooks';
import DEFAULT_BACKGROUND from '../../images/background.png';

import './Profile.scss';

export const ProfilePage = () => {
    const params = useParams();
    const userID = params.id;

    const { data: userData } = useUserDetails(userID);

    // TODO: wait for hooks at PR #82
    // const { data: postsData } = useUserPosts(userID);

    if (!userData?.data()) {
        return null;
    }

    const { background_picture_url } = userData.data();

    return (
        <div className='profile__page'>
            <div>
                <ImageComponent
                    customClass='background__image'
                    src={background_picture_url || DEFAULT_BACKGROUND}
                />
            </div>

            <UserInfo
                userID={userID}
                onPost
                customClass='profile__page__user__info'
            />

            <UserDetails userID={userID} />

            <div>
                <Text size='medium'>Posts</Text>

                {/* TODO: posts */}
                <PostCollection posts={[]} />
            </div>
        </div>
    );
};
