import "./Header1.css";
import showtime from "../show-time.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSortDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header1(prop) {
  function citychange() {
    prop.setmodelvisible(true);
    prop.setcityvisible(true);
  }
  function slidemenu() {
    document.getElementById("menu-bar").style.right = 0;
    prop.setmodelvisible(true);
  }
  return (
    <>
      <div id="main-header">
        <div id="main-header-left">
          <Link to="/">
            <img className="show-time-logo" src={showtime} alt="" />
          </Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            className="main-search-box"
            type="text"
            placeholder="Search for Movies, Events, Plays and Activities"
          />
        </div>
        <div id="main-header-right">
          <button className="city-btn" onClick={citychange}>
            {prop.city === "none" ? "Select your City" : prop.city} &nbsp;
            <FontAwesomeIcon icon={faSortDown} inverse className="icondown" />
          </button>
          <button className="signin-btn">Sign In</button>
          <FontAwesomeIcon
            icon={faBars}
            inverse
            className="icon-menu"
            onClick={slidemenu}
          />
        </div>
      </div>
    </>
  );
}

export default Header1;
