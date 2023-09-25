import linkedin from "../social-icons/linkedin.svg";
import github from "../social-icons/github.svg";
import portfolio from "../social-icons/user-regular.svg";
import instagram from "../social-icons/instagram.svg";
import "./SocialIcons.css";
function SocialIcons() {
  return (
    <>
      <div id="social-container">
        <a
          href="https://www.linkedin.com/in/vk8192449/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/vkumar8192449"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://vkumar8192449.github.io/Portfolio-website/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={portfolio} alt="Portfolio" />
        </a>
        <a
          href="https://www.instagram.com/vinaykumar_2012/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </>
  );
}
export default SocialIcons;
