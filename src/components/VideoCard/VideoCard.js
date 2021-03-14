import React from "react";
import "./VideoCard.scss";
const VideoCard = ({ PreviewUrl, profileUrl, title, uploader, viewsDate }) => {
  return (
    <div id="VideoCard">
      <div className="img-container">
        <img src={PreviewUrl} alt="preview" />
      </div>
      <div className="profile-container">
        <div className="profile-photo">
          <img src={profileUrl} alt="" />
        </div>
        <div className="profile-info">
          <span className="title">{title}</span>
          <span className="uploader">{uploader}</span>
          <span className="viewsDate"> {viewsDate} </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
