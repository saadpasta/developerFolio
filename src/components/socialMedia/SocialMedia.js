import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {socialMediaLinks.facebook ?
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      :
      null}

       {socialMediaLinks.instagram ?
      <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.twitter ?
      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.medium ? 
      (<a href={socialMediaLinks.medium} className="icon-button medium" target="_blank">
        <i className="fab fa-medium"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.stackoverflow ? 
      (<a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank">
        <i className="fab fa-stack-overflow"></i>
        <span></span>
      </a>)
      :
      null}
      
      {socialMediaLinks.youtube ?
      <a href={socialMediaLinks.youtube} className="icon-button youtube" target="_blank">
        <i className="fab fa-youtube"></i>
        <span></span>
      </a>
      :
      null}
      
      {socialMediaLinks.discord ?
      <a href={socialMediaLinks.discord} className="icon-button discord" target="_blank">
        <i className="fab fa-discord"></i>
        <span></span>
      </a>
      :
      null}
            
      {socialMediaLinks.whatsapp ?
      <a href={socialMediaLinks.whatsapp} className="icon-button whatsapp" target="_blank">
        <i className="fab fa-whatsapp"></i>
        <span></span>
      </a>
      :
      null}
                  
      {socialMediaLinks.soundcloud ?
      <a href={socialMediaLinks.soundcloud} className="icon-button soundcloud" target="_blank">
        <i className="fab fa-soundcloud"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.tumblr ?
      <a href={socialMediaLinks.tumblr} className="icon-button tumblr" target="_blank">
        <i className="fab fa-tumblr"></i>
        <span></span>
      </a>
      :
      null}
      
      {socialMediaLinks.snapchat ?
      <a href={socialMediaLinks.snapchat} className="icon-button snapchat" target="_blank">
        <i className="fab fa-snapchat"></i>
        <span></span>
      </a>
      :
      null}
      
      {socialMediaLinks.twitch ?
      <a href={socialMediaLinks.twitch} className="icon-button twitch" target="_blank">
        <i className="fab fa-twitch"></i>
        <span></span>
      </a>
      :
      null}
      
      {socialMediaLinks.slack ?
      <a href={socialMediaLinks.slack} className="icon-button slack" target="_blank">
        <i className="fab fa-slack"></i>
        <span></span>
      </a>
      :
      null}
      
      {socialMediaLinks.vimeo ?
      <a href={socialMediaLinks.vimeo} className="icon-button vimeo" target="_blank">
        <i className="fab fa-vimeo"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.twitter ?
      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      :
      null}

    </div>
  );
}
