"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
];

export default function ImageSwiper() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-3 relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaLongArrowAltLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaLongArrowAltRight />
      </button>
      <Swiper
        modules={[FreeMode, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        speed={800}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="cursor-grab"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
