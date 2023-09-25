import "./MEPA_Page.css";
import Tile from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function MoviesPage(props) {
  return (
    <>
      <div id="mepa-main-cont">
        <div id="mepa-left">
          <h4>Filters</h4>
          <div className="filter-box"></div>
        </div>
        <div id="mepa-right">
          <p>Movies In {props.city}</p>
          <div className="mepa-right-cont">
            {props.movies.map((value, key) => (
              <Tile
                tile="tile-cont"
                key={key}
                linkto={value.slug.toLowerCase()}
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
      </div>
    </>
  );
}
export default MoviesPage;
