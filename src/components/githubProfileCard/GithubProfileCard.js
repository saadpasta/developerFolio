import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function GithubProfileCard({prof}) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function openRepoinNewTab(url) {
    alert(url);
    var win = window.open(url, "_blank");
    win.focus();
	}
  if (prof.hireable!=null){
           prof.hireable="Yes"
}else{
prof.hireable="No"
}
  return (
    <div className="row">
		<div className="main-content-profile">
			<div className="blog-header">
				
				<p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
			</div>
			<h2 className="bio-text">"{prof.bio}"</h2>
			<div className="location-div">
				<span className="subTitle location-info">
				<i className="fa fa-map-marker"></i>{prof.location}
				</span>
			</div>
			<br />
			<span className="subTitle">Open for opportunities: {prof.hireable}</span>
			<br />
			<br />
			<SocialMedia/>
		</div>
		<div className="image-content-profile">
			<img src={prof.avatar_url} alt={prof.name} className="profile-image" width="200" height="200"/>
		</div>
    </div>
  )
}
