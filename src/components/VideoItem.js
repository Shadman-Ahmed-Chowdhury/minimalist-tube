import React from 'react'; 
import "./VideoItem.css";

const VideoItem = ({video, onVideoSelect}) => { 
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <div className="card">
        <div className="card-horizontal">
          <div className="card-img-body">
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" className="card-img"/>
          </div>
          <div className="card-body">
            <h6 className="card-title">{video.snippet.title}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}; 

export default VideoItem; 