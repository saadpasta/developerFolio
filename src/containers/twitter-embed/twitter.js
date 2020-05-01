import React, { useContext } from "react";
import "./twitter.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
var widthScreen = window.screen.width;

export default function Twitter() {
	const { isDark } = useContext(StyleContext);
	if (twitterDetails.userName) {
		return (
			<Fade bottom duration={1000} distance="20px">
<div class="tw-main-div" id="twitter">
			<div className="centerContent">
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName={twitterDetails.userName}
				options={{ height: 400, width: { widthScreen } }}
				placeholder="Can't load? Check privacy protection settings"
				autoHeight={false}
				key={isDark ? "1" : "2"}
				theme={isDark ? "dark" : "light"}
				borderColor="#fff"
				transparent={true}
				noScrollbar={true}
				noFooter={true}
			/>
			</div>
			</div>
			</Fade>
);
	} else {
		return null;
	}
}