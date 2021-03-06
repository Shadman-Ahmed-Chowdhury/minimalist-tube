import React from "react";
import "./VideoDetail.css";
import DOMPurify from "dompurify";
import moment from "moment";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?rel=0&autoplay=1`;
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <div className="video-detail container">
      <div className="">
        <iframe
          title="video player"
          height="315"
          src={videoSrc}
          allowFullScreen="allowFullScreen"
        ></iframe>
      </div>
      <div className="video-detail-title mt-3">
        <h4
          className="content"
          dangerouslySetInnerHTML={createMarkup(video.snippet.title)}
        ></h4>
        <p>{moment(video.snippet.publishedAt).format("MMMM Do, YYYY")} </p>
        <h6>
          <span className="channel-name">{video.snippet.channelTitle}</span>
        </h6>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
