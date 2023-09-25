import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import "./MEPE_Container.css";
import { Link } from "react-router-dom";
function RecommendedMovies(props) {
  return (
    <>
      <div id="RecommendedMovies">
        <div className="tilescontainer-head">
          <h4>Recommended Movies</h4>
          <Link
            to="/movies"
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
          {props.movies.slice(0, 5).map((value, key) => (
            <Tile
              tile="tile"
              key={key}
              linkto={`movies/${value.slug.toLowerCase()}`}
              poster={value.poster}
              title={
                <>
                  {value.title} <br />
                  <span className="genre">{value.genre}</span>
                </>
              }
              rating={
                <>
                  <FontAwesomeIcon icon={faStar} className="star-icon" />{" "}
                  {value.rating}/10 &nbsp; 26.1K Votes
                </>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default RecommendedMovies;
