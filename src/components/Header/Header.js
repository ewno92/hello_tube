import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header-logo">
      <MenuOutlinedIcon />
      <img src={logo} alt="HelloTube logo" />

      <input type="text" />
      <SearchOutlinedIcon />
      <VideocamOutlinedIcon />
      <AppsOutlinedIcon />
      <NotificationsIcon />
      <div className="sign-in">
        <AccountCircleIcon />
        <span>SIGN IN</span>
      </div>
    </div>
  );
};

export default Header;
