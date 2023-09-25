import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./MEPE_Container.css";
import { Link } from "react-router-dom";

function FunActivities(props) {
  return (
    <>
      <div id="RecommendedMovies">
        <div className="tilescontainer-head">
          <h4>Explore Fun Activities</h4>
          <Link
            to="/activities"
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
          {props.activities.slice(0, 5).map((value, key) => (
            <Tile
              tile="tile"
              key={key}
              linkto={`activities/${value.slug.toLowerCase()}`}
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
export default FunActivities;
