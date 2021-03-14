import React from "react";
import "./SideMenu.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SideMenu = ({ selected, Icon, name, link }) => {
  return (
    <div id="SideMenu" className={`${selected && "selected"}`}>
      {console.log(selected)}
      <Router>
        {/* <Link to="/home">Home</Link> */}

        <Icon className="menu-icon" />

        <span className="name"> {name}</span>
      </Router>
    </div>
  );
};

export default SideMenu;
