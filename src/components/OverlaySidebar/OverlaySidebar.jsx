import React from "react";
import "./OverlaySidebar.css";

function OverlaySidebar(props) {
  const { isShowSidebar, setIsShowSidebar, onhandleShowSidebar } = props;
  return <div className="overlay-sidebar" onClick={onhandleShowSidebar}></div>;
}

export default OverlaySidebar;
