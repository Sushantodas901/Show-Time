import showtime from "../show-time.png";
import SocialIcons from "./SocialIcons";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer-sub">
          <span className="footer-logo-line"></span>
          <img src={showtime} alt="Show Time" className="footer-logo" />
          <span className="footer-logo-line"></span>
        </div>
        <SocialIcons />
        <p className="lower-footer">
          🎨✨ Created with passion and expertise by Vinay Kumar. Witness a
          digital masterpiece tailored with love and care. ✨🎨
        </p>
      </div>
    </>
  );
}
export default Footer;
