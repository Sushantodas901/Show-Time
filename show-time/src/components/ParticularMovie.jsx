import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Cast from "./Cast.jsx";
import "./ParticularMovie.css";

function ParticularMovie(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const params = useParams();
  const [data, setdata] = useState({});
  const [cast, setcast] = useState([]);

  useEffect(() => {
    props.movies.map((i, key) =>
      i.slug === params.movieslug ? `${setdata(i)}${setcast(i.cast)}` : ""
    );
    scrollToTop();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.getElementById(
      "movie-cover"
    ).style.backgroundImage = `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url(${data.mainposter})`;
  }, [data]);

  return (
    <>
      <div id="movie-cover">
        <div className="movie-cover-left">
          <img
            src={data.poster ? `data:image/png;base64, ${data.poster}` : ""}
            alt="movie-poster"
          />
        </div>
        <div className="movie-cover-right">
          <h1>{data.title}</h1>
          <h2>
            <FontAwesomeIcon icon={faStar} className="star-icon-color" />{" "}
            {data.rating}/10
          </h2>
          <p className="screentype-language">{data.screentype}</p>
          <p className="screentype-language">{data.language}</p>
          <p className="runtime">
            {Math.floor(data.runtime / 60)}h {data.runtime % 60}m &nbsp;
            &#9679;&nbsp;
            {"  "}
            {data.genre} &nbsp; &#9679;&nbsp; {data.release}
          </p>
          <button id="booking-btn">Book tickets</button>
        </div>
      </div>
      <div className="about-section">
        <h3>About the movie</h3>
        <p>{data.about}</p>
      </div>
      <div className="cast-section">
        <h3>Cast</h3>
        {cast.length ? (
          <Cast cast={cast} class1="cast-cont" class2="cast-col" />
        ) : (
          ""
        )}
      </div>
      <div className="reviews-section">
        <h3>Top reviews</h3>
        <p>feature coming soon...</p>
      </div>
    </>
  );
}
export default ParticularMovie;
