import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data";
import "../assets/css/posts.css";

const Posts = () => {
  return (
      <div className="posts-container">
        {blogPosts.map((post, index) => (
            <div key={index} className="post-summary">
              <h2>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
              <Link to={`/post/${index}`}>Read More</Link>
            </div>
        ))}
      </div>
  );
};

export default Posts;