import React from 'react'
import "./Skills.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore,{Navigation} from "swiper/core";

import "swiper/css/navigation"


// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import precent1 from "../../images/meter1.svg";
import precent2 from "../../images/meter2.svg";
import precent3 from "../../images/meter3.svg";


SwiperCore.use([ Navigation]);
export default function Skills() {
  return (
    <div className="bg">
      <div className="continer">
        <h2 className="skill">Skills</h2>
        <p className="para">You Can See My Skills Here</p>
        <Swiper
          navigation={true}
          className="general_swipe"
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
              width: 400,
            },
            400: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="item1">
            {/* <button className='item_btn'>95%</button> */}
            <img src={precent1} alt="precent" className="it" />
            <p className="smp">Html,Css</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={precent3} alt="precent" className="it" />
            <p className="smp">JavaScript</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={precent3} alt="precent" className="it" />
            <p className="smp s3"> bootstrap</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={precent2} alt="precent" className="it" />
            <p className="smp s3">React Js</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
