import React, { useState, useEffect } from 'react';
import "./Videos.scss";
import {Fade} from "react-reveal";
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import { Videos } from "../../portfolio";

const VideoContainer = () => {
  const [videos, setVideoUrls] = useState([]);
  console.log(`process.env object: ${JSON.stringify(process.env)}`)
  console.log(`Node App Server: ${process.env.NODE_APP_SERVER_URL}`)

  useEffect(() => {
    fetch(process.env.NODE_APP_SERVER_URL)
      .then(response => response.json())
      .then(data => setVideoUrls(data))
      .catch(error => console.error(error));
  }, []);

  if (Videos.display) {
    return (
      <div id="videos">
      <Fade bottom duration={1000} distance="20px">
        <div className="videos-container">
          <div>
            <h1 className="videos-heading">Videos</h1>
            <div className="video-cards-div">
              {videos.map(video => (
                <VideoPlayer key={video._id} url={video.url} />
              ))}
            </div>
          </div>
        </div>
        </Fade>
      </div>  
    );
  }
};

export default VideoContainer;
