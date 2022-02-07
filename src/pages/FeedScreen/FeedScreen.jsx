import { Timestamp } from 'firebase/firestore';
import { useCreatePost, usePosts, useUser } from '../../hooks';
import { Form, PostCollection } from '../../components';
import './FeedScreen.scss';

export const FeedScreenPage = () => {
    const user = useUser();
    const { data: postsData } = usePosts();
    const createPost = useCreatePost();

    if (!postsData) return null;

    return (
        <div className='page__feed'>
            <Form
                placeholder='Write something...'
                type='post'
                onSubmit={(data) =>
                    createPost({
                        authorID: user.data.uid,
                        createdOn: Timestamp.now(),
                        text_content: data.post
                    })
                }
            />
            <PostCollection posts={postsData.docs} />
        </div>
    );
};
