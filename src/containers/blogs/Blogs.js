import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";

export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">Blogs</h1>
        <p className="subTitle blog-subtitle">With Love for Developing cool stuff. i love to write and teach others what i have learned</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          <BlogCard
            blog={{
              url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
              image: "https://miro.medium.com/max/400/1*pYHONrA_3QM4dgtBSKrYWQ.jpeg",
              title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
              description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
            }}
          />
          <BlogCard
            blog={{
              url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
              image: "https://miro.medium.com/max/1280/1*o08b2PW-1PVs94riZuhNMA.png",
              title: "Why REACT Is The Best?",
              description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
            }}
          />
        </div>
      </div>
    </div>
  );
}
