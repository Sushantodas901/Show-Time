import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import "./MenuBar.css";

function MenuBar() {
  return (
    <>
      <div id="menu-bar">
        <div className="hey">
          <h4>Hey!</h4>
        </div>
        <div className="menu-bar-item2">
          <h6>Unlock special offers & great benefits</h6>
          <button className="register-btn">Login / Register</button>
        </div>
        <div className="menu-bar-itmes">
          <FontAwesomeIcon className="menu-icons" icon={faBell} />
          Notification
        </div>
        <div className="menu-bar-itmes">
          <FontAwesomeIcon className="menu-icons" icon={faTicket} />
          Your Orders
        </div>
        <div className="menu-bar-itmes">
          <FontAwesomeIcon className="menu-icons" icon={faCommentDots} />
          Help & Support
        </div>
      </div>
    </>
  );
}
export default MenuBar;
