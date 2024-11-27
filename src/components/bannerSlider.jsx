import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import {useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "./button";
import { FaPlay } from "react-icons/fa";
import { getTopRatedMovies } from "../services/movieApi";
import { useNavigate } from "react-router-dom";

export default function BannerSlider() {
  const { data, error, isPending } = useQuery({
    queryKey: ["topRated-movies"],
    queryFn: async ()=>getTopRatedMovies()
  });

  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData(["genre"]);

  const navigate = useNavigate()

  const handleNavigate = (movieId) => {
    navigate("/movieDetails/"+movieId)
  }
  
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative w-full h-full bg-black bg-center bg-cover"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.158)),
                    url(https://image.tmdb.org/t/p/original/${item.backdrop_path})
                  `,
                }}
              
              >
                <div className="absolute flex flex-col gap-3 items-start justify-start text-justify bottom-[100px] xl:left-[127px] lg:left-[80px] max-w-[990px] px-5">
                  <div>
                    <p className="font-light text-[22px]">
                      {item.release_date.split("-")[0]}
                    </p>
                    <span className="md:text-[48px] text-[22px] font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <span className="md:text-[19px] text-[15px] font-semibold">
                    {genres?.find((g) => g.id === item.genre_ids[0]).name}
                  </span>
                  <p className="md:text-[19px] text-[14px]">{item.overview}</p>
                  <div className="flex items-center gap-6">
                    <Button onClick={()=>handleNavigate(item.id)}>
                      <FaPlay />
                      Play Now
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
