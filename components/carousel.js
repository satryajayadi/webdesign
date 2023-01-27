// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import First from "../public/swiperone.jpeg";
import Second from "../public/swipertwo.jpeg";
import Th from "../public/swiperthree.png";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-96 z-10 border-b border-gray-300">
          <Image src={First} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-96 z-10 border-b border-gray-300">
          <Image src={Th} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-96 z-10 border-b border-gray-300"> 
          <Image src={Second} fill />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
