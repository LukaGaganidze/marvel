import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import styles from "./ComicsSliderStyles.module.css";
import classes from "./ComicsSlider.module.css";

import ComicsSlideritem from "./ComicsSliderItem";

// IMGS FOR SLIDER
import img1 from "../../assets/comics-page/slider1/pic1.jpg";
import img2 from "../../assets/comics-page/slider1/pic2.jpg";
import img3 from "../../assets/comics-page/slider1/pic3.jpg";

import img4 from "../../assets/comics-page/slider2/pic1.jpg";
import img5 from "../../assets/comics-page/slider2/pic2.jpg";
import img6 from "../../assets/comics-page/slider2/pic3.jpg";

import img7 from "../../assets/comics-page/slider3/pic1.jpg";
import img8 from "../../assets/comics-page/slider3/pic2.jpg";
import img9 from "../../assets/comics-page/slider3/pic3.jpg";

import img10 from "../../assets/comics-page/slider4/pic1.jpg";
import img11 from "../../assets/comics-page/slider4/pic2.jpg";
import img12 from "../../assets/comics-page/slider4/pic3.jpg";

import img13 from "../../assets/comics-page/slider5/pic1.jpg";
import img14 from "../../assets/comics-page/slider5/pic2.jpg";
import img15 from "../../assets/comics-page/slider5/pic3.jpg";

const SLIDER_DATA = [
  {
    image: img7,
    comicName: "Secret Empire (2017) #1",
    published: "May 03, 2006",
    writer: "Nick Spencer",
    penciler: "Steve Mcniven",
    id: 63296,
  },

  {
    image: img2,
    comicName: "Infinity Gauntlet: Deluxe Edition (Hardcover)",
    published: "April 03, 2019",
    writer: "Jim Starlin",
    penciler: "George Perez",
    id: 73553,
  },
  {
    image: img3,
    comicName: "Infinity War Omnibus (Hardcover)",
    published: "April 2, 2019",
    writer: "Ron Marz",
    penciler: "Ron Lim",
    id: 73554,
  },
  {
    image: img4,
    comicName: "Amazing Fantasy Facsimile Edition (2019) #1",
    published: "August 01, 1962",
    writer: "Jeff Youngquist",
    penciler: "",
    id: 81303,
  },
  {
    image: img5,
    comicName: "Infinity Wars (2018) #5",
    published: "August 01, 2018",
    writer: "Gerry Duggan",
    penciler: "Mike Deodato",
    id: 67150,
  },
  {
    image: img6,
    comicName: "Darth Vader (2017) #1",
    published: "May 03, 2006",
    writer: "Charles Soule",
    penciler: "Giuseppe Camuncoli",
    id: 63169,
  },

  {
    image: img8,
    comicName: "Civil War II (2016)",
    published: "May 18, 2016",
    writer: "Brian Michael Bendis",
    penciler: "Olivier Coipel",
    id: 59386,
  },
  {
    image: img9,
    comicName: "Black Panther (2021) #1",
    published: "November 24, 2021",
    writer: "John Ridley",
    penciler: "",
    id: 9,
  },

  {
    image: img10,
    comicName: "Avengers Assemble Omega (2023) #1 (Variant)",
    published: "April 19, 2023",
    writer: "Jason Aaron",
    penciler: "",
    id: 106930,
  },
  {
    image: img11,
    comicName: "Thanos (2019) #3 (Variant)",
    published: "June 26, 2019",
    writer: "Tini Howard",
    penciler: "Ariel Olivetti",
    id: 11,
  },
  {
    image: img12,
    comicName: "Deadpool (2022) #3",
    published: "January 18, 2023",
    writer: "Alyssa Wong",
    penciler: "Martin Coccolo",
    id: 93030,
  },
  {
    image: img13,
    comicName: "Secret Wars (2015) #1",
    published: "May 06, 2015",
    writer: "Jonathan Hickman",
    penciler: "Alex Ross",
    id: 52447,
  },
  {
    image: img14,
    comicName: "Ultimate Spider-Man (2000) #1",
    published: "September 06, 2000",
    writer: "Brian Michael Bendis, Bill Jemas",
    penciler: "Mark Bagley",
    id: 4372,
  },
  {
    image: img15,
    comicName: "X-Men: Gold (2017) #1",
    published: "April 05, 2017",
    writer: "Marc Guggenheim",
    penciler: "Ardian Syaf",
    id: 62719,
  },
  {
    image: img1,
    comicName: "CIVIL WAR TPB (Trade Paperback)",
    published: "May 03, 2006",
    writer: "Mark Millar",
    penciler: "Steve Mcniven",
    id: 34423,
  },
];

const ComicsSlider = () => {
  return (
    <div className={classes["swiper-container"]}>
      {/* LARGE SCREEN */}
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={classes["swiper"]}
      >
        {SLIDER_DATA.map((comic) => (
          <SwiperSlide key={comic.id}>
            <ComicsSlideritem
              image={comic.image}
              comicName={comic.comicName}
              published={comic.published}
              writer={comic.writer}
              penciler={comic.penciler}
              id={comic.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MID SCREEN */}
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={classes["swiper-2"]}
      >
        {SLIDER_DATA.map((comic) => (
          <SwiperSlide key={comic.id}>
            <ComicsSlideritem
              image={comic.image}
              comicName={comic.comicName}
              published={comic.published}
              writer={comic.writer}
              penciler={comic.penciler}
              id={comic.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SMALL SCREEN */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={classes["swiper-3"]}
      >
        {SLIDER_DATA.map((comic) => (
          <SwiperSlide key={comic.id}>
            <ComicsSlideritem
              image={comic.image}
              comicName={comic.comicName}
              published={comic.published}
              writer={comic.writer}
              penciler={comic.penciler}
              id={comic.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ComicsSlider;
