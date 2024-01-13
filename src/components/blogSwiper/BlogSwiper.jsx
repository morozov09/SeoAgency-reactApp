import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

import reviewImg from "../../assets/img/blog/blog-1.png";

import reviewImg02 from "../../assets/img/blog/blog-2.png";

export default function App() {
  return (
    <div className="swiper__container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide__blog-body">
            <a className="slide__link" href="#!"></a>
            <img src={reviewImg} alt="reviewImg" />
            <h4>Free Font Alternatives: The Ultimate Guide</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__blog-body">
            <a className="slide__link" href="#!"></a>
            <img src={reviewImg02} alt="reviewImg" />
            <h4>100 Things a UX/UI Designer Should Know</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__blog-body">
            <a className="slide__link" href="#!"></a>
            <img src={reviewImg} alt="reviewImg" />
            <h4>Free Font Alternatives: The Ultimate Guide</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__blog-body">
            <a className="slide__link" href="#!"></a>
            <img src={reviewImg02} alt="reviewImg" />
            <h4>100 Things a UX/UI Designer Should Know</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
