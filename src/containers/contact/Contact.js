import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
        </div>
        <div className="contact-text-div">
          <h1 className="contact-detail">{contactInfo.number}</h1>

          <h1 className="contact-detail-email">{contactInfo.email_address}</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
