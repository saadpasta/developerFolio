import React from "react";
import "./twitter.css";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Twitter() {
	if (twitterDetails.userName){
		return (
			<Fade bottom duration={1000} distance="20px">
            <div className="main" id="twitter">
			<h1 className="tw-header-text">Tweets </h1>
			<p className="subTitle tw-subtitle">By @{twitterDetails.userName}</p>
			
			<div className="centerContent">
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName ={ twitterDetails.userName }
				options={{height:400,width: "100%"}}
				placeholder="Can't load? Check privacy protection settings"
				autoHeight= {false}
				noFooter= {true}
                noHeader = {true}
				theme= "light"
				transparent={true}
				noScrollbar={true}
			/>
			</div>
			</div>
			</Fade>
  );  
	} else {  
		return null;
	}
}