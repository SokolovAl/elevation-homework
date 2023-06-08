const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: [],
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" },
        ],
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: [],
    },
];

const postId = 2;
const commentId = 3;

let postIndex = -1;

for (let i in posts) {
    if (posts[i].id === postId) {
        postIndex = i;
        break;
    }
}

if (postIndex !== -1) {
    let commentIndex = -1;
    const comments = posts[postIndex].comments;
    for (let i in comments) {
        if (comments[i].id === commentId) {
            commentIndex = i;
            break;
        }
    }
    if (commentIndex !== -1) {
        posts[postIndex].comments.splice(commentIndex, 1);
    }
}

for (const post of posts) {
    console.log(`${post.id}`);
    for (const comment of post.comments) {
        console.log(comment.text);
    }
}
