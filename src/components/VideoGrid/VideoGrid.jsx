import React from "react";
import "./VideoGrid.css";
import VideoComponent from "./VideosComponent/VideoComponent";

function VideoGrid(props) {
  const { isShowSidebar, setIsShowSidebar, onhandleShowSidebar } = props;
  return (
    <div
      className={`video-containter ${
        isShowSidebar ? "move-containter movetoback" : ""
      }`}
    >
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
    </div>
  );
}

export default VideoGrid;
