import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";

export default function BannerSlider() {
  const { data, error, isPending } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_MOVIE_API}`,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data.results;
    },
  });

  console.log(data);
  return (
    <>
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
        {data &&
          data.map((item) => (
            <SwiperSlide>
              <div
                className="w-full h-full bg-black bg-center bg-cover"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${item.backdrop_path})`,
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
