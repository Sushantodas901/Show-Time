import "./MEPA_Page.css";
import Tile from "./Tile";

function ActivitiesPage(props) {
  return (
    <>
      <div id="mepa-main-cont">
        <div id="mepa-left">
          <h4>Filters</h4>
          <div className="filter-box"></div>
        </div>
        <div id="mepa-right">
          <p>Activities In {props.city}</p>
          <div className="mepa-right-cont">
            {props.activities.map((value, key) => (
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
export default ActivitiesPage;
