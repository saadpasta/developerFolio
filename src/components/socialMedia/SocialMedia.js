import React from 'react';
import A from '../Basic/A';
import {socialMediaLinks} from '../../portfolio';
import './SocialMedia.css';

export default function socialMedia() {
	return (
		<div className="social-media-div">
			<A
				href={socialMediaLinks.github}
				className="icon-button github"
				target="_blank"
			>
				<i className="fab fa-github"></i>
				<span></span>
			</A>
			<A
				href={socialMediaLinks.linkedin}
				className="icon-button linkedin"
				target="_blank"
			>
				<i className="fab fa-linkedin-in"></i>
				<span></span>
			</A>
			<A
				href={`mailto:${socialMediaLinks.gmail}`}
				className="icon-button google"
				target="_blank"
			>
				<i className="fab fa-google"></i>
				<span></span>
			</A>
			<A
				href={socialMediaLinks.gitlab}
				className="icon-button gitlab"
				target="_blank"
			>
				<i className="fab fa-gitlab"></i>
				<span></span>
			</A>
			<A
				href={socialMediaLinks.facebook}
				className="icon-button facebook"
				target="_blank"
			>
				<i className="fab fa-facebook-f"></i>
				<span></span>
			</A>
		</div>
	);
}
