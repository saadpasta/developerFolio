"use client";
import React from "react";

function BlogCardClient({blog, children}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  return <div  onClick={() => openUrlInNewTab(blog.url, blog.title)}>{children}</div>;
}

export default BlogCardClient;
