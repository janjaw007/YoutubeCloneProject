import React, { Children } from "react";
import "../../index.css";
import "./SidebarToggle.css";
import NavBox from "../Navbar/NavbarComponents/Navbox";
import { GiHamburgerMenu } from "react-icons/gi";
import youtubeLogo from "../../assets/youtubelogo.svg";
import "../Navbar/Navbar.css";

import {
  AiFillHome,
  AiOutlineDown,
  AiFillGoogleCircle,
  AiOutlineFire,
} from "react-icons/ai";
import { PiTiktokLogo, PiMusicNoteLight } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";

import { BiSolidVideos, BiLike, BiNews, BiTrophy } from "react-icons/bi";

import { LuHistory } from "react-icons/lu";
import { RiVideoLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { LiaDownloadSolid } from "react-icons/lia";
import { CiStreamOn } from "react-icons/ci";

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

const secondLists = [
  {
    icon: <BiSolidVideos className="icon" />,
    text: "คลังวีดีโอ",
  },
  {
    icon: <LuHistory className="icon" />,
    text: "ประวัติการเข้าชม",
  },
  {
    icon: <RiVideoLine className="icon" />,
    text: "วีดีโอของคุณ",
  },
  {
    icon: <BsClockHistory className="icon" />,
    text: "ดูภายหลัง",
  },
  {
    icon: <LiaDownloadSolid className="icon" />,
    text: "การดาวน์โหลด",
  },
  {
    icon: <BiLike className="icon" />,
    text: "วีดีโอที่ชอบ",
  },
  {
    icon: <AiOutlineDown className="icon" />,
    text: "แสดงเพิ่มเติม",
  },
];

const followerLists = [
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "HEARTROCKER",
    streamStatus: true,
  },
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "9arm",
    streamStatus: true,
  },
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "autolifeth...",
    streamStatus: true,
  },
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "Kevin Powell",
    streamStatus: false,
  },
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "freehand band",
    streamStatus: false,
  },
  {
    channelImg: <AiFillGoogleCircle className="icon" />,
    channelName: "Misson To The ...",
    streamStatus: false,
  },
  {
    channelImg: <AiOutlineDown className="icon" />,
    channelName: "การแสดงเพิ่มเติม",
  },
];

const discoveryLists = [
  {
    icon: <AiOutlineFire className="icon" />,
    text: "มาแรง",
  },
  {
    icon: <PiMusicNoteLight className="icon" />,
    text: "เพลง",
  },
  {
    icon: <SiYoutubegaming className="icon" />,
    text: "เกม",
  },
  {
    icon: <BiNews className="icon" />,
    text: "ข่าวสาร",
  },
  {
    icon: <BiTrophy className="icon" />,
    text: "กีฬา",
  },
];

function SidebarToggle(props) {
  const { isShowSidebar, onhandleShowSidebar } = props;

  return (
    <div
      className={`sidebartoggle-contaitner ${
        isShowSidebar ? "show-sidebar" : ""
      }`}
    >
      <div className="sidebar-nav">
        <NavBox className={"left-nav"}>
          <GiHamburgerMenu
            onClick={onhandleShowSidebar}
            className="ham-menu nav-items"
          />
          <img src={youtubeLogo} alt="" />
        </NavBox>
      </div>
      <SidebarBox>
        {menuLists.map((menuList) => {
          return (
            <li key={menuList.text} className="side-list">
              <span className="content">
                {menuList.icon}
                <span>{menuList.text}</span>
              </span>
              <span className="stream">
                {menuLists?.streamStatus && <CiStreamOn className="icon" />}
              </span>
            </li>
          );
        })}
      </SidebarBox>
      <SidebarBox>
        {secondLists.map((menuList) => {
          return (
            <li key={menuList.text} className="side-list">
              <span className="content">
                {menuList.icon}
                <span>{menuList.text}</span>
              </span>
              <span className="stream">
                {menuLists?.streamStatus && <CiStreamOn className="icon" />}
              </span>
            </li>
          );
        })}
      </SidebarBox>
      <SidebarBox>
        <div className="headerSidebar">การติดตาม</div>
        {followerLists.map((channel) => {
          return (
            <>
              <li key={channel.channelName} className="side-list">
                <span className="content">
                  {channel.channelImg}
                  <span> {channel.channelName}</span>
                </span>
                <span className="stream">
                  {channel.streamStatus && <CiStreamOn className="icon" />}
                </span>
              </li>
            </>
          );
        })}
      </SidebarBox>
      <SidebarBox>
        <div className="headerSidebar">สำรวจ</div>
        {discoveryLists.map((menuList) => {
          return (
            <li key={menuList.text} className="side-list">
              <span className="content">
                {menuList.icon}
                <span>{menuList.text}</span>
              </span>
              <span className="stream">
                {menuLists?.streamStatus && <CiStreamOn className="icon" />}
              </span>
            </li>
          );
        })}
      </SidebarBox>
    </div>
  );
}

function SidebarBox({ children }) {
  return <ul className="sidebar-box">{children}</ul>;
}

export default SidebarToggle;
