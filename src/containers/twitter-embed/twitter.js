import React from "react";
import "./twitter.css";
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import { twitterDetails } from "../../portfolio";

var widthScreen=window.screen.width;
export default function Twitter() {
	if (twitterDetails.userName){
		return (
            <div class="tw-main-div" id="twitter">       
			<div className="centerContent">
			<TwitterTimelineEmbed
		  	sourceType="profile"
		  	screenName ={ twitterDetails.userName }
		  	options={{height:400,width: {widthScreen}}}
			placeholder="Loading twitter Component Please Wait."
			autoHeight= {false}
			borderColor= "#fff"
			noFooter= {true}
			/>
			</div>
			</div>
  );  
	} else {  
		return null;
	}
}