import React from 'react';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import {twitterDetails} from '../../portfolio';
import {Fade} from 'react-reveal';
import './twitter.css';

const widthScreen = window && window.screen.width;

const Twitter = () => {
	if (twitterDetails.userName) {
		return (
			<Fade bottom duration={1000} distance="20px">
				<div className="tw-main-div" id="twitter">
					<div className="centerContent">
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName={twitterDetails.userName}
							options={{height: 400, width: {widthScreen}}}
							placeholder="Can't load? Check privacy protection settings"
							autoHeight={false}
							borderColor="#fff"
							noFooter={true}
						/>
					</div>
				</div>
			</Fade>
		);
	} else {
		return null;
	}
};

export default Twitter;
