import React from "react";
import "./GithubProfileCard.css";


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
    <div>
      <h2>"{prof.bio}"</h2>
      <div className="location-div">
      <span className="subTitle location-info">
        <i className="fa fa-map-marker"></i>{prof.location}
      </span>
      </div>
      <img src={prof.avatar_url} alt={prof.name} className="profile-image"/>
      <br />
      <span className="subTitle">Open for opportunities:{prof.location}</span>
      <br />
    {prof.html_url}
    {prof.blog}
    </div>
  )
}
