import React from "react";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Talks() {
  return (
		<div className="main" id="talks">
			<div className="talk-header">
				<Fade bottom duration={1000} distance="20px">
					<h1 className="talk-header-title">{talkSection.title}</h1>
				</Fade>
				<Fade bottom duration={1500} distance="20px">
					<p className="subTitle talk-header-subtitle">
						{talkSection.subtitle}
					</p>
				</Fade>
				{talkSection.talks.map(talk => {
					return (
						<Fade bottom duration={2000} distance="20px">
							<TalkCard
								talkDetails={{
									title: talk.title,
									subtitle: talk.subtitle,
									slides_url: talk.slides_url,
									event_url: talk.event_url,
									image: talk.image
								}}
							/>
						</Fade>
					);
				})}
			</div>
		</div>
	);
}
