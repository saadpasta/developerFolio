import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Podcast() {
  return (
		<div className="main">
			<Fade bottom duration={1000} distance="20px">
				<div className="podcast-header">
					<h1 className="podcast-header-title">{podcastSection.title}</h1>
					<p className="subTitle podcast-header-subtitle">
						{podcastSection.subtitle}
					</p>
				</div>
			</Fade>
			<Fade bottom duration={1500} distance="20px">
				<div className="podcast-main-div">
					{podcastSection.podcast.map(podcastLink => {
						return (
							<div>
								<iframe
									className="podcast"
									src={podcastLink}
									frameborder="0"
									scrolling="no"
								></iframe>
							</div>
						);
					})}
				</div>
			</Fade>
		</div>
	);
}
