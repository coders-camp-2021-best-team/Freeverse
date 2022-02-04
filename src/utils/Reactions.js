/**
 * @param {import('../api/types').Post} post
 */
export const countReactions = (post) => {
    return {
        likes: Object.values(post.reactions).reduce(
            (count, r) => (r === 'LIKE' ? count + 1 : count),
            0
        ),
        dislikes: Object.values(post.reactions).reduce(
            (count, r) => (r === 'DISLIKE' ? count + 1 : count),
            0
        )
    };
};
