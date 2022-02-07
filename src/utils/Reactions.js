/**
 * @param {import('../api/types').Reaction[]} reactions
 */
export const countReactions = (reactions) => {
    return {
        likes: reactions.reduce(
            (count, { type }) => (type === 'LIKE' ? count + 1 : count),
            0
        ),
        dislikes: Object.values(reactions).reduce(
            (count, { type }) => (type === 'DISLIKE' ? count + 1 : count),
            0
        )
    };
};
