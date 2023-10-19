import React from "react";
import "./Navbar.css";
import "../../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMicFill, BsBell } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import NavBox from "./NavbarComponents/Navbox";

import { AiOutlineVideoCameraAdd } from "react-icons/ai";

import youtubeLogo from "../../assets/youtubelogo.svg";

function Navbar({ showSidebar, setShowSidebar }) {
  function onhandleShowSidebar() {
    if (showSidebar === "") {
      setShowSidebar("show-sidebar");
    } else {
      setShowSidebar("");
    }
    console.log(showSidebar);
  }

  return (
    <div className="section-navbar">
      <div className="content-containter nav-containter">
        <NavBox className={"left-nav"}>
          <GiHamburgerMenu
            onClick={onhandleShowSidebar}
            className="ham-menu nav-items"
          />
          <img src={youtubeLogo} alt="" />
        </NavBox>
        <NavBox className={"center-nav"}>
          <div className="search-box">
            <input type="text" placeholder="ค้นหา" className="search-bar" />
            <GoSearch className="lens nav-items" />
          </div>
          <BsFillMicFill className="mic nav-items" />
        </NavBox>
        <NavBox className={"right-nav"}>
          {/* <GiHamburgerMenu className="ham-menu" /> */}
          <AiOutlineVideoCameraAdd className="camera nav-items" />

          <BsBell className="bell nav-items" />
          <div className="noti">9+</div>

          <div className="profile "></div>
        </NavBox>
      </div>
    </div>
  );
}

export default Navbar;
