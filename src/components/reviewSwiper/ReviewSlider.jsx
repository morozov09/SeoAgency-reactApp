import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Pagination } from "swiper/modules";

import reviewImg from "../../assets/img/reviews/person.svg";

export default function App() {
  return (
    <div className="swiper__container">
      <Swiper  pagination={{
          clickable: true,
        }} modules={[Pagination]}  className="mySwiper">
        <SwiperSlide>
          <div className="slide__body d-flex a-items j-cont">
            <div className="slide__left">
              <h6>Elistanaka</h6>
              <p>randomised words which don't look even slightly believable.</p>
            </div>
            <div className="slide__right">
              <img src={reviewImg} alt="reviewImg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__body d-flex a-items j-cont">
            <div className="slide__left">
              <h6>Elistanaka</h6>
              <p>randomised words which don't look even slightly believable.</p>
            </div>
            <div className="slide__right">
              <img src={reviewImg} alt="reviewImg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__body d-flex a-items j-cont">
            <div className="slide__left">
              <h6>Elistanaka</h6>
              <p>randomised words which don't look even slightly believable.</p>
            </div>
            <div className="slide__right">
              <img src={reviewImg} alt="reviewImg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
