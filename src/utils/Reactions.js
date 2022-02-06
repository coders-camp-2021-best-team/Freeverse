export const countReactions = (reactions) => {
    return {
        likes: Object.values(reactions).reduce(
            (count, r) => (r === 'LIKE' ? count + 1 : count),
            0
        ),
        dislikes: Object.values(reactions).reduce(
            (count, r) => (r === 'DISLIKE' ? count + 1 : count),
            0
        )
    };
};
