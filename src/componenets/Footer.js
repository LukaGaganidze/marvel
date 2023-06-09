import classes from "./Footer.module.css";

// cover images
import spider from "../assets/footer/spide.png";
import venom from "../assets/footer/venom.png";

// skills logo images
import html from "../assets/footer/footer-logos/html.png";
import css from "../assets/footer/footer-logos/css.png";
import reactjs from "../assets/footer/footer-logos/react.png";
import redux from "../assets/footer/footer-logos/redux.png";
import router from "../assets/footer/footer-logos/dom.png";
import ui from "../assets/footer/footer-logos/res-UI.png";

const Footer = () => {
  return (
    <footer className={classes["footer-sec"]}>
      {/* BACKGTOUND ABSOLUTE IMAGES */}
      <img src={spider} className={classes["friendly-neigbourhood"]} />
      <img src={venom} className={classes["venom"]} />
      <img />

      {/* CONTENT */}
      {/* about */}
      <div className={classes["footer-content"]}>
        <div className={classes["footer-about"]}>
          <h4 className={classes["footer-sub-heder"]}>About:</h4>
          <p>
            Marvelpedia, one of my portfolio projects. As a junior front-end
            developer, my primary focus during the creation of this website was
            on its design and delivering an exceptional user experience. I
            strived to create an aesthetically pleasing and user-friendly
            interface to showcase my skills.{" "}
          </p>
        </div>
        {/* tools */}
        <div className={classes["footer-tools"]}>
          <h4 className={classes["footer-sub-heder"]}>
            Tools and skills I have used:
          </h4>
          <div className={classes["tool-box"]}>
            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={html} />
            </div>

            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={css} />
            </div>

            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={reactjs} />
            </div>

            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={redux} />
            </div>

            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={router} />
            </div>

            <div className={classes["tool"]}>
              <img className={classes["tool-img"]} src={ui} />
            </div>
          </div>
        </div>

        {/* API */}
        <div className={classes["footer-api"]}>
          <h4 className={classes["footer-sub-heder"]}>
            I have used the{" "}
            <a target="_Blank" href="https://developer.marvel.com/">
              Marvel Developer Portal
            </a>{" "}
            to provide data for the website
          </h4>
          <p>
            Data provided by{" "}
            <a target="_Blank" href="https://developer.marvel.com/">
              Marvel
            </a>
            . © 2014 Marvel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
