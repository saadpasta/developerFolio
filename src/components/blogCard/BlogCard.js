import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div>
      <div class="blog-container" onClick={() => openUrlInNewTab(blog.url)}>
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
