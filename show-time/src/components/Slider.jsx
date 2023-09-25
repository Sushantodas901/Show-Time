import poster1 from "../Posters/poster1.avif";
import poster2 from "../Posters/poster2.avif";
import poster3 from "../Posters/poster3.avif";
import poster4 from "../Posters/poster4.avif";
import poster5 from "../Posters/poster5.avif";
function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ userSelect: "none" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={poster1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
