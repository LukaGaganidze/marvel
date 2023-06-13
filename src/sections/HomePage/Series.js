import { useState, useRef, useEffect } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./Series.module.css";

import LoadingDots from "../../assets/svg/LoadingDots";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Series.css";

// IMAGES
import blackwidow from "../../assets/series/series/black-widow.jpg";
import moonKnight from "../../assets/series/series/moon-knight.jpg";
import avengers from "../../assets/series/series/avengers.jpg";
import startwars from "../../assets/series/series/start-wars.jpg";
import spider from "../../assets/series/series/spider.jpg";

// RESPONSIVE
import blackwidowresponsive from "../../assets/series/series/black-widow-responsive.jpg";
import moonknightresponsive from "../../assets/series/series/moon-knight-responsive.jpg";
import avengersResp from "../../assets/series/series/avengers-responsive.jpg";
import startwarsresponsive from "../../assets/series/series/start-wars-responsive.jpg";
import spidermanresponsive from "../../assets/series/series/spider-man-responsive.jpg";

const SERIES_DATA = [
  {
    name: "Avengers",
    period: "2018 - Present",
    image: avengers,
    navToL: 24229,
  },
  {
    name: "Start Wars",
    period: "2015 - 2019",
    image: startwars,
    navToL: 19242,
  },
  {
    name: "Moon Knight",
    period: "2021 - Present",
    image: moonKnight,
    navToL: 32071,
  },

  {
    name: "Black Widow",
    period: `(2014 - 2015)`,
    image: blackwidow,
    navToL: 18138,
  },
  {
    name: "Spider-Man",
    period: "2018 - Present",
    image: spider,
    navToL: 24396,
  },
];
const SERIES_DATA_MOBILE = [
  {
    name: "Avengers",
    period: "2018 - Present",
    image: avengersResp,
    navToL: 24229,
  },
  {
    name: "Start Wars",
    period: "2015 - 2019",
    image: startwarsresponsive,
    navToL: 19242,
  },
  {
    name: "Moon Knight",
    period: "2021 - Present",
    image: moonknightresponsive,
    navToL: 32071,
  },

  {
    name: "Black Widow",
    period: `(2014 - 2015)`,
    image: blackwidowresponsive,
    navToL: 18138,
  },
  {
    name: "Spider-Man",
    period: "2018 - Present",
    image: spidermanresponsive,
    navToL: 24396,
  },
];

const Series = () => {
  // LOADING UI
  const [clicked, setClicked] = useState(false);
  const { state } = useNavigation();
  const seriesBtnCickHandler = () => {
    setClicked(true);
  };

  // SLIDE IN EFFECT (INTERSECTIONOBSERVER)
  const [isVisible, setIsVisible] = useState(false);
  const componenetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1, rootMargin: "500px" }
    );

    if (componenetRef.current) {
      observer.observe(componenetRef.current);
    }
    return () => {
      if (componenetRef.current) {
        observer.unobserve(componenetRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={componenetRef}
      className={`${classes["series-sec"]} ${
        classes[isVisible ? "visible" : ""]
      }`}
    >
      {/* LARGE VERSION */}

      <h2
        className={`${classes["main-header"]} ${classes["main-header-left"]} ${classes["header-animated-left"]}`}
      >
        <span>Marvel Comics Series</span> Showcase
      </h2>
      <h2
        className={`${classes["main-header"]} ${classes["main-header-right"]} ${classes["header-animated-right"]}`}
      >
        Epic <span>Superhero</span> Showdowns
      </h2>

      {/* SMALLER  VERSION */}
      <h2 className={classes["mobile-v-heading"]}>Marvel Comics Series</h2>

      <div className={classes["slider-container"]}>
        {/* LARGE VERSION */}
        <div className={classes["slider-l"]}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {SERIES_DATA.map((item) => (
              <SwiperSlide key={item.name}>
                <div className={`${classes["series-slider"]}`}>
                  <div className={classes["series-img-container"]}></div>
                  <img className={classes["series-img"]} src={item.image} />
                  <div
                    className={`${classes["absolute-text"]} ${classes["series-text-container"]}`}
                  >
                    <h3 className={classes["series-header-tertiary"]}>
                      DISCOVER MORE
                    </h3>
                    <h2 className={classes["series-header-primery"]}>
                      {item.name}
                    </h2>
                    <p className={classes["series-description"]}>
                      {item.period}
                    </p>

                    <Link
                      onClick={seriesBtnCickHandler}
                      to={`/series/${item.navToL}`}
                      className={classes["series-btn"]}
                    >
                      {clicked && state === "loading" ? (
                        <LoadingDots className={classes["loading-dots"]} />
                      ) : (
                        <> series: {item.name}</>
                      )}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MOBILE VERSION */}
        <div className={classes["slider-s"]}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {SERIES_DATA_MOBILE.map((item) => (
              <SwiperSlide key={item.name}>
                <div className={`${classes["series-slider"]}`}>
                  <div className={classes["series-img-container"]}></div>
                  <img className={classes["series-img"]} src={item.image} />
                  <div
                    className={`${classes["absolute-text"]} ${classes["series-text-container"]}`}
                  >
                    <h3 className={classes["series-header-tertiary"]}>
                      DISCOVER MORE
                    </h3>
                    <h2 className={classes["series-header-primery"]}>
                      {item.name}
                    </h2>
                    <p className={classes["series-description"]}>
                      {item.period}
                    </p>
                    <Link
                      onClick={seriesBtnCickHandler}
                      to={`/series/${item.navToL}`}
                      className={classes["series-btn"]}
                    >
                      {clicked && state === "loading" ? (
                        <LoadingDots className={classes["loading-dots"]} />
                      ) : (
                        <> series: {item.name}</>
                      )}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Series;
