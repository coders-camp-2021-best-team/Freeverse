/**
 * @param {{ id: string, data: import('../api/types').Reaction }[]} reactions
 */
export const countReactions = (reactions, userID) => {
    return {
        likes: reactions.reduce(
            (count, { data: { type } }) =>
                type === 'LIKE' ? count + 1 : count,
            0
        ),
        likedBy: reactions.some(
            ({ id, data: { type } }) => id === userID && type === 'LIKE'
        ),
        dislikes: Object.values(reactions).reduce(
            (count, { data: { type } }) =>
                type === 'DISLIKE' ? count + 1 : count,
            0
        ),
        dislikedBy: reactions.some(
            ({ id, data: { type } }) => id === userID && type === 'DISLIKE'
        )
    };
};
