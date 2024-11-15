import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "./button";
import { FaPlay } from "react-icons/fa";
import { getLastestMovies } from "../services/movieApi";

export default function BannerSlider() {
  const { data, error, isPending } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: async ()=>  getLastestMovies()
  });

  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData(["genre"]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
            <SwiperSlide key={item.id}>
              <div
                className="relative w-full h-full bg-black bg-center bg-cover"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                }}
              >
                <div className="absolute flex flex-col gap-3 items-start justify-start text-justify bottom-[100px] left-[127px] max-w-[990px]">
                  <div>
                    <p className="font-light text-[22px]">
                      {item.release_date.split("-")[0]}
                    </p>
                    <span className="text-[48px] font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[19px] font-semibold">
                    {genres?.find((g) => g.id === item.genre_ids[0]).name}
                  </span>
                  <p className="text-[19px]">{item.overview}</p>
                  <div className="flex items-center gap-6">
                    <Button>
                      <FaPlay />
                      Play Now
                    </Button>
                    <Button type="outline">
                      <FaPlay />
                      Watch Triller
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-black"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
