import React, { Children } from "react";
import "../../index.css";
import "./SidebarToggle.css";
import NavBox from "../Navbar/NavbarComponents/Navbox";
import { GiHamburgerMenu } from "react-icons/gi";
import youtubeLogo from "../../assets/youtubelogo.svg";
import "../Navbar/Navbar.css";

import { AiFillHome } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";

const menuLists = [
  {
    icon: <AiFillHome className="icon" />,
    text: "หน้าแรก",
  },
  {
    icon: <PiTiktokLogo className="icon" />,
    text: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions className="icon" />,
    text: "การติดตาม",
  },
  {
    icon: <SiYoutubemusic className="icon" />,
    text: "Youtube Music",
  },
];

function SidebarToggle() {
  return (
    <div className="SidebarToggle-section">
      <div className="sidebartoggle-contaitner">
        <div className="sidebar-nav">
          <NavBox className={"left-nav"}>
            <GiHamburgerMenu className="ham-menu nav-items" />
            <img src={youtubeLogo} alt="" />
          </NavBox>
        </div>
        <SidebarBox>
          {menuLists.map((menuList) => {
            return (
              <li key={menuList.text} className="side-list">
                {menuList.icon}
                <span>{menuList.text}</span>
              </li>
            );
          })}
        </SidebarBox>
      </div>
    </div>
  );
}

function SidebarBox({ children }) {
  return <ul className="sidebar-box">{children}</ul>;
}

export default SidebarToggle;
