import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data";

const Post = () => {
    const { index } = useParams();
    const post = blogPosts[index];

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-container">
            <h1>{post.title}</h1>
            <img src={post.imgUrl} alt={post.title} />
            <p>{post.body}</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
};

export default Post;