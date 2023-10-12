import React from "react";
import "./Sidebar.css";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubemusic } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
// import { GoHomeFill } from "react-icons/go";

const sidebarContentList = [
  {
    icon: <GoHomeFill />,
    label: "หน้าแรก",
  },
  {
    icon: <SiYoutubemusic />,
    label: "Youtube Music",
  },
  {
    icon: <HiDownload />,
    label: "การดาวน์โหลด",
  },
];

function Sidebar() {
  return (
    <div className="sidebar-container">
      {sidebarContentList?.map((sidebarContent) => {
        return (
          <div key={sidebarContent.label}>
            {sidebarContent.icon}
            <p>{sidebarContent.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
