import React from "react";
import { Link } from "react-router-dom";
import "./Blogitem.css";

const BlogItem = ({ blog, content }) => {
  return (
    <div className="blogItem-wrap" key={blog.title}>
      <div className="hovereffect">
  
        <Link
          className="blogItem-link"
          to={`/blog/${blog.title}`}
          onClick={() => {
            content(blog);
          }}
        >
          <img
            className="blogItem-cover"
            src={blog.featured_image}
            alt="cover"
          />
        </Link>
      </div>

      <h3>{blog.title}</h3>
    </div>
  );
};

export default BlogItem;
