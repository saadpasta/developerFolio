import React from "react";
import {blogSection} from "../../portfolio";
import styles from "./Blogs.module.scss";
import BlogCard from "../../(components)/(BlogCard)/BlogCard";

const getData = async () => {
  const {MEDIUM_USERNAME} = process.env;
  if (!MEDIUM_USERNAME) return "Error";
  const options = {
    method: "GET",
    cache: "force-cache"
  };
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  const result = await fetch(url, options);
  if (!result.ok) return "Error";

  const res = await result.json();
  return res.items;
};

async function Blogs() {
  const mediumBlogs = await getData();
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  return (
    <div className="main" id="blogs">
      <div>
        <h1 className={styles.headerText}>{blogSection.title}</h1>
        <p className={`subTitle ${styles.subtitle}`}>{blogSection.subtitle}</p>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.textDiv}>
          {(!mediumBlogs && blogSection.displayMediumBlogs !== "true") ||
          mediumBlogs === "Error"
            ? blogSection.blogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    blog={{
                      url: blog.url,
                      image: blog.image,
                      title: blog.title,
                      description: blog.description
                    }}
                  />
                );
              })
            : mediumBlogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    blog={{
                      url: blog.link,
                      title: blog.title,
                      description: extractTextContent(blog.content)
                    }}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
