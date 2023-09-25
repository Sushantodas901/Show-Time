import "./Header2.css";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <div id="header2">
        <Link to="/movies">Movies</Link>
        <Link to="/events">Events</Link>
        <Link to="/plays">Plays</Link>
        <Link to="/activities">Activities</Link>
      </div>
    </>
  );
}
export default Header2;
