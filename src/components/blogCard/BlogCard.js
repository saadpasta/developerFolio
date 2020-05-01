import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, isDark }) {
  return (
    <div>
      <div class={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a class="blog-card" href="#blog" >
          <h3 className="blog-title">{blog.title}</h3>
          <p class="small">{blog.description}</p>
          <div class="go-corner" >
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
