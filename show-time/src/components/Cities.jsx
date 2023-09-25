import ahd from "../City-icons/ahd.avif";
import ahdS from "../City-icons/ahd-selected.avif";
import bang from "../City-icons/bang.png";
import bangS from "../City-icons/bang-selected.avif";
import chd from "../City-icons/chd.avif";
import chdS from "../City-icons/chd-selected.avif";
import chen from "../City-icons/chen.avif";
import chenS from "../City-icons/chen-selected.avif";
import hyd from "../City-icons/hyd.png";
import hydS from "../City-icons/hyd-selected.png";
import koch from "../City-icons/koch.avif";
import kochS from "../City-icons/koch-selected.avif";
import kolk from "../City-icons/kolk.avif";
import kolkS from "../City-icons/kolk-selected.avif";
import mumbai from "../City-icons/mumbai.avif";
import mumbaiS from "../City-icons/mumbai-selected.png";
import ncr from "../City-icons/ncr.avif";
import ncrS from "../City-icons/ncr-selected.avif";
import pune from "../City-icons/pune.png";
import puneS from "../City-icons/pune-selected.png";
import "./Cities.css";

function Cities(prop) {
  return (
    <>
      <div id="cities-block">
        <div
          className="city"
          name="mumbai"
          onMouseOver={(e) => {
            e.target.src = mumbaiS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Mumbai") {
              e.target.src = mumbai;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Mumbai");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = mumbaiS;
          }}
        >
          <img src={prop.city === "Mumbai" ? mumbaiS : mumbai} alt="mumbai" />
          <p>Mumbai</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = ncrS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Delhi") {
              e.target.src = ncr;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Delhi");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = ncrS;
          }}
        >
          <img src={prop.city === "Delhi" ? ncrS : ncr} alt="ncr" />
          <p>Delhi</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = bangS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Bengaluru") {
              e.target.src = bang;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Bengaluru");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = bangS;
          }}
        >
          <img src={prop.city === "Bengaluru" ? bangS : bang} alt="bang" />
          <p>Bengaluru</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = hydS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Hyderabad") {
              e.target.src = hyd;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Hyderabad");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = hydS;
          }}
        >
          <img src={prop.city === "Hyderabad" ? hydS : hyd} alt="hyd" />
          <p>Hyderabad</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = ahdS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Ahmedabad") {
              e.target.src = ahd;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Ahmedabad");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = ahdS;
          }}
        >
          <img src={prop.city === "Ahmedabad" ? ahdS : ahd} alt="ahd" />
          <p>Ahmedabad</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = chdS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Chandigarh") {
              e.target.src = chd;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Chandigarh");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = chdS;
          }}
        >
          <img src={prop.city === "Chandigarh" ? chdS : chd} alt="chd" />
          <p>Chandigarh</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = chenS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Chennai") {
              e.target.src = chen;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Chennai");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = chenS;
          }}
        >
          <img src={prop.city === "Chennai" ? chenS : chen} alt="chen" />
          <p>Chennai</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = puneS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Pune") {
              e.target.src = pune;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Pune");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = puneS;
          }}
        >
          <img src={prop.city === "Pune" ? puneS : pune} alt="pune" />
          <p>Pune</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = kolkS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Kolkata") {
              e.target.src = kolk;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Kolkata");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = kolkS;
          }}
        >
          <img src={prop.city === "Kolkata" ? kolkS : kolk} alt="kolk" />
          <p>Kolkata</p>
        </div>
        <div
          className="city"
          onMouseOver={(e) => {
            e.target.src = kochS;
          }}
          onMouseOut={(e) => {
            if (prop.city !== "Kochi") {
              e.target.src = koch;
            }
          }}
          onClick={(e) => {
            prop.settingcity("Kochi");
            prop.setmodelvisible(false);
            prop.setcityvisible(false);
            e.target.src = kochS;
          }}
        >
          <img src={prop.city === "Kochi" ? kochS : koch} alt="koch" />
          <p>Kochi</p>
        </div>
        <p style={{ color: "red" }}>
          At the moment, only operating in a limited number of cities.
        </p>
      </div>
    </>
  );
}
export default Cities;
