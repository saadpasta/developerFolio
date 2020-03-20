import React from "react";
import "./twitter.css";
import {TwitterTimelineEmbed} from 'react-twitter-embed';
var width=window.width
export default function Twitter() {
    return (
            <div class="tw-main-div">       
		<div className="centerContent">
		<div className="selfCenter standardWidth">
		<TwitterTimelineEmbed
  sourceType="profile"
  screenName="syrus_dark"
  options={{height: 400,width:"auto"}}
  placeholder="loading"
/>
		</div>
		</div>
		</div>
  );
}
