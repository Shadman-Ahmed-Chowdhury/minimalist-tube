import React from "react";
import "./VideoItem.css";
import DOMPurify from "dompurify";

const VideoItem = ({ video, onVideoSelect }) => {
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <div className="card">
        <div className="card-horizontal">
          <div className="card-img-body">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="card-img"
            />
          </div>
          <div className="card-body">
            <h6
              className="content"
              dangerouslySetInnerHTML={createMarkup(video.snippet.title)}
            ></h6>
            <h6>
              <span className="channel-name-sm">
                {video.snippet.channelTitle}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
