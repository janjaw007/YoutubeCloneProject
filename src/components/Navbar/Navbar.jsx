import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMicFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import NavBox from "./NavbarComponents/Navbox";

import youtubeLogo from "../../assets/youtubelogo.svg";

function Navbar() {
  return (
    <div className="nav-containter containter">
      <NavBox className={"left-nav"}>
        <GiHamburgerMenu className="ham-menu" />
        <img src={youtubeLogo} alt="" />
      </NavBox>
      <NavBox className={"center-nav"}>
        <div className="search-box">
          <input type="text" placeholder="ค้นหา" className="search-bar" />
          <GoSearch className="lens" />
        </div>
        <BsFillMicFill className="mic" />
      </NavBox>
      <NavBox className={"right-nav"}>
        <GiHamburgerMenu className="ham-menu" />
      </NavBox>
    </div>
  );
}

export default Navbar;
