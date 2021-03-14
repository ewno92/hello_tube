import "./Header.scss";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";

import logo from "./logo-w.png";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <div className="menu-logo">
          <MenuOutlinedIcon />
          <div className="header-logo">
            <img src={logo} alt="HelloTube logo" />
          </div>
        </div>
      </Link>
      {/* input */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="icon-container">
          <SearchOutlinedIcon className="search-button" />
        </div>
      </div>

      <div className="icon-container">
        <AppsIcon />
        <MoreVertIcon />
        <NotificationsIcon />
      </div>

      {/* <NotificationsIcon /> */}
      <div className="signin-box">
        <a href="#">
          <AccountCircleIcon />
          <span>SIGN IN</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
