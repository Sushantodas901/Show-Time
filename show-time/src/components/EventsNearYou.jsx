import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./MEPE_Container.css";
import { Link } from "react-router-dom";

function EventsNearYou(props) {
  return (
    <>
      <div id="RecommendedMovies">
        <div className="tilescontainer-head">
          <h4>Events Happening Near You</h4>
          <Link
            to="/events"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ textDecoration: "none" }}
          >
            <h6>
              See All &nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </h6>
          </Link>
        </div>
        <div className="tilescontainer">
          {props.events.slice(0, 5).map((value, key) => (
            <Tile
              tile="tile"
              key={key}
              linkto={`events/${value.slug.toLowerCase()}`}
              poster={value.poster}
              title={
                <>
                  {value.name} <br />
                  <span className="genre">{value.location}</span>
                </>
              }
              rating={value.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default EventsNearYou;
