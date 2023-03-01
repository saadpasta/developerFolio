//components/videoPlayer/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({  url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="90%"
        height="90%"
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;