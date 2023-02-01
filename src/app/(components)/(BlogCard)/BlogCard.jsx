import React from "react";
import styles from "./BlogCard.module.scss";
import BlogCardClient from "./BlogsCardClient";

export default function BlogCard({blog}) {
  return (
    <BlogCardClient blog={blog}>
      <div className={styles.container}>
        <a className={styles.card} href="#blog">
          <h3 className={styles.title}>{blog.title}</h3>
          <p className={styles.small}>{blog.description}</p>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </a>
      </div>
    </BlogCardClient>
  );
}
