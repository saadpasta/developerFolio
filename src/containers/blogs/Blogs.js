import React, {useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import useFetch from "../../hooks/useFetch";

//Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
function extractTextContent(html) {
  return typeof html === "string"
    ? html
        .split(/<\/p>/i)
        .map(part => part.split(/<p[^>]*>/i).pop())
        .filter(el => el.trim().length > 0)
        .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
        .join(" ")
    : NaN;
}

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const displayMediumBlogs = blogSection.displayMediumBlogs === "true";
  const {data, error} = useFetch(displayMediumBlogs ? "/blogs.json" : null, {
    errorMessage:
      "(because of this error Blogs section could not be displayed. Blogs section has reverted to default)"
  });

  if (!blogSection.display) {
    return null;
  }

  const mediumBlogs = data?.items ?? [];
  const showMediumBlogs = displayMediumBlogs && !error;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {!showMediumBlogs
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
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
                      isDark={isDark}
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
    </Fade>
  );
}
