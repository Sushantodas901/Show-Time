import "./Cast.css";
import castpic from "../social-icons/castpic.png";
import { useState, useEffect } from "react";

function Cast(props) {
  const [castcount, setcastcount] = useState(0);
  const [castdata, setcastdata] = useState([]);

  async function fetchimg(name) {
    if (props.castimage === "0") {
      return "";
    }
    try {
      var result = await fetch(`http://localhost:5000/api/cast/${name}`);
      result = await result.json();
      return `${result[0].pic}`;
    } catch (err) {
      return castpic;
    }
  }
  useEffect(() => {
    setcastcount(props.cast.length);
    props.cast.map((value, key) => {
      fetchimg(value).then((val) => {
        setcastdata((prevObject) => [...prevObject, { name: value, pic: val }]);
      });
      return 0;
    });
    // eslint-disable-next-line
  }, [props.cast]);

  return (
    <>
      <div id={props.class1}>
        {castdata.slice(0, castcount).map((value, key) => {
          return (
            <div className={props.class2} key={key}>
              {!props.castimage ? <img src={value.pic} alt={key} /> : ""}
              <p>{value.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Cast;
