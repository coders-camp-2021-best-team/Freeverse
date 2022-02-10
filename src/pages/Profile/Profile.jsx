import { useParams } from 'react-router';
import {
    ImageComponent,
    UserInfo,
    UserDetails,
    PostCollection,
    Text
} from '../../components';
import { useUserDetails, useUserPosts } from '../../hooks';
import DEFAULT_BACKGROUND from '../../images/background.png';

import './Profile.scss';

export const ProfilePage = () => {
    const params = useParams();
    const userID = params.id;

    const { data: userData } = useUserDetails(userID);
    const { data: postsData } = useUserPosts(userID);

    // TODO: wait for hooks at PR #82
    // const { data: postsData } = useUserPosts(userID);

    if (!userData?.data() || !postsData) {
        return null;
    }

    const { background_picture_url } = userData.data();

    return (
        <div className='profile__page'>
            <div className='background'>
                <ImageComponent
                    customClass='background__image'
                    src={background_picture_url || DEFAULT_BACKGROUND}
                />
            </div>

            <div className='userinfo'>
                <UserInfo
                    userID={userID}
                    onPost
                    customClass='profile__page__user__info'
                />
            </div>

            <UserDetails userID={userID} />

            <div className='posts'>
                <Text customClass='titleposts' size='large'>
                    Posts
                </Text>

                {/* TODO: posts */}
                <PostCollection posts={postsData.docs} />
            </div>
        </div>
    );
};
