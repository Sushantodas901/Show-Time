import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Cast from "./Cast";
import "./ParticularEvent.css";

function ParticularActivity(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const params = useParams();
  const [data, setdata] = useState({
    mainposter: "",
  });
  useEffect(() => {
    props.activities.map((i, key) =>
      i.slug.toLowerCase() === params.activityslug ? `${setdata(i)}` : ""
    );
    document.getElementById(
      "event-mainposter"
    ).style.backgroundImage = `url(data:image/png;base64,${data.mainposter})`;
    scrollToTop();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="particular-event">
        <div id="event-mainposter">
          <div id="main-poster-back">
            <img
              src={`data:image/png;base64, ${data.mainposter}`}
              alt="main poster"
            />
          </div>
          <img
            src={`data:image/png;base64, ${data.mainposter}`}
            alt="main poster"
            className="mainposter"
          />
        </div>
        <div id="event-header">
          <div className="event-title">
            <div>
              <p className="event-title-main">{data.name}</p>
              <p className="event-title-sub">{data.description}</p>
            </div>
            <button className="booking-btn">Book tickets</button>
          </div>
          <hr />
          <div className="event-sub-title">
            <p>{data.timedate}</p>
            <p className="event-gap">|</p>
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="location-icon-color"
              />{" "}
              {data.location}
            </p>
            <p className="event-gap">|</p>
            <p>
              <strong>&#8377; {data.price}</strong> onwards
            </p>
          </div>
        </div>
        <div id="event-body">
          <div className="event-body-cast">
            <div className="">
              <h5>Artist</h5>
              {data.artist ? (
                <Cast cast={data.artist} castimage={1} class2="artist-col" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="event-body-about">
            <div>
              <p className="event-abt-head">About</p>
              <p className="event-abt">{data.about}</p>
            </div>
            <br />
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <strong>Terms & Conditions</strong>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {data.terms
                      ? data.terms.map((val, key) => (
                          <div key={key}>
                            <p style={{ fontSize: "0.8rem" }}>• &nbsp;{val}</p>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ParticularActivity;
