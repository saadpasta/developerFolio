"use client";
import React from "react";
import styles from "./BlogCard.module.scss";

export default function BlogCard({blog}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={styles.container}>
        <a className={styles.card} href="#blog">
          <h3 className={styles.title}>{blog.title}</h3>
          <p className={styles.small}>{blog.description}</p>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
