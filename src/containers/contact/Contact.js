import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from 'react-reveal';

export default function Contact() {
    return (
			<div className="main contact-margin-top" id="contact">
				<div className="contact-div-main">
					<div className="contact-header">
						<Fade bottom duration={1000} distance="20px">
							<h1 className="heading contact-title">{contactInfo.title}</h1>
						</Fade>
						<Fade bottom duration={1500} distance="20px">
							<p className="subTitle contact-subtitle">
								{contactInfo.subtitle}
							</p>
						</Fade>
						<Fade bottom duration={2000} distance="20px">
							<div className="contact-text-div">
								<a
									className="contact-detail"
									href={"tel:" + contactInfo.number}
								>
									{contactInfo.number}
								</a>
								<br />
								<br />
								<a
									className="contact-detail-email"
									href={"mailto:" + contactInfo.email_address}
								>
									{contactInfo.email_address}
								</a>
								<br />
								<br />
								<SocialMedia />
							</div>
						</Fade>
					</div>
					<div className="contact-image-div">
						<img
							alt="Saad Working"
							src={require("../../assests/images/contactMail.png")}
						></img>
					</div>
				</div>
			</div>
		);
}
