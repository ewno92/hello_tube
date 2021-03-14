import React from "react";
import "./Sidebar.scss";
import SideMenu from "./SideMenu/SideMenu";
// icons
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="sidebar-container">
      <Link to="/">
        <SideMenu selected Icon={HomeIcon} name="Home" />
      </Link>
      <Link to="/trending">
        <SideMenu Icon={WhatshotIcon} name="Trending" />
      </Link>
      <Link to="/subscriptions">
        <SideMenu Icon={SubscriptionsIcon} name="Subscriptions" />
      </Link>
      <hr />
      <SideMenu Icon={VideoLibraryIcon} name="Library" />
      <SideMenu Icon={HistoryIcon} name="History" />
    </div>
  );
};

export default Sidebar;
