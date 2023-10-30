import React from "react";
import "./VideoGrid.css";

function VideoGrid(props) {
  const { isShowSidebar, setIsShowSidebar, onhandleShowSidebar } = props;
  return (
    <div
      className={`video-containter ${
        isShowSidebar ? "move-containter movetoback" : ""
      }`}
    >
      VideoGrid
    </div>
  );
}

export default VideoGrid;
