import React from "react";
import A from "../Basic/A";
import {socialMediaLinks} from "../../portfolio";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <A
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </A>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <A
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </A>
      ) : null}
      {socialMediaLinks.gmail ? (
        <A
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </A>
      ) : null}
      {socialMediaLinks.gitlab ? (
        <A
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </A>
      ) : null}

      {socialMediaLinks.facebook ? (
        <A
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </A>
      ) : null}

      {socialMediaLinks.instagram ? (
        <A
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </A>
      ) : null}

      {socialMediaLinks.twitter ? (
        <A
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </A>
      ) : null}
    </div>
  );
}
