import { Link } from "react-router-dom";
import "./Tile.css";

function Tile(props) {
  return (
    <>
      <div id={props.tile}>
        <div id="poster">
          <img
            src={`data:image/png;base64, ${props.poster}`}
            alt=""
            className="tileposter"
          />
          <span>{props.rating}</span>
        </div>
        <Link to={props.linkto} style={{ textDecoration: "none" }}>
          <p className="title">{props.title}</p>
        </Link>
      </div>
    </>
  );
}
export default Tile;
