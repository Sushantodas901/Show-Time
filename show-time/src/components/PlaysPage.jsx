import "./MEPA_Page.css";
import Tile from "./Tile";

function PlaysPage(props) {
  return (
    <>
      <div id="mepa-main-cont">
        <div id="mepa-left">
          <h4>Filters</h4>
          <div className="filter-box"></div>
        </div>
        <div id="mepa-right">
          <p>Plays In {props.city}</p>
          <div className="mepa-right-cont">
            {props.plays.map((value, key) => (
              <Tile
                tile="tile-cont"
                key={key}
                linkto={value.slug.toLowerCase()}
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
      </div>
    </>
  );
}
export default PlaysPage;
