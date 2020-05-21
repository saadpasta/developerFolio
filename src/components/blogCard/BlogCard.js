import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div className="blog-container">
        <a className="blog-card" href="#blog" >
          <h3 className="blog-title">{blog.title}</h3>
          <p className="small">{blog.description}</p>
          <div className="go-corner" >
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
