import React from 'react';
import {podcastSection} from '../../portfolio';
import {Fade} from 'react-reveal';
import './Podcast.css';

const Podcast = () => (
	<Fade bottom duration={1000} distance="20px">
		<div className="main">
			<div className="podcast-header">
				<h2 className="podcast-header-title">{podcastSection.title}</h2>
				<p className="subTitle podcast-header-subtitle">
					{podcastSection.subtitle}
				</p>
			</div>
			<div className="podcast-main-div">
				{podcastSection.podcast.map(podcastLink => {
					return (
						<div>
							<iframe
								title="Podcast"
								className="podcast"
								src={podcastLink}
								frameborder="0"
								scrolling="no"
							></iframe>
						</div>
					);
				})}
			</div>
		</div>
	</Fade>
);

export default Podcast;
