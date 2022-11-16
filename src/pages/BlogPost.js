import { React } from "react";
import EmptyList from "../components/EmptyList";
import "./Blogpost.css";
import { Link } from "react-router-dom";

const Blog = ({ content }) => {
  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back Home</span>
      </Link>
      {content ? (
        <div className="blog-wrap">
          <header>
            <Link className="blog-goBack" to="/">
              <h1>{content.title}</h1>
            </Link>
            <div className="blog-subCategory"></div>
          </header>
          
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content.body }}
          ></div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
