import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => (
  <div className="project-page-video-responsive">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
