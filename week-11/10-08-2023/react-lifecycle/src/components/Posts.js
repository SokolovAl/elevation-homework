import React, {useEffect, useState} from "react";
import "../style/posts.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10)))
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <>
            <h1>Top posts:</h1>
            <div className = "posts-container">
                {posts.map(post => (
                    <div key = {post.id} className = "post">
                        <div className = "post-frame">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;
