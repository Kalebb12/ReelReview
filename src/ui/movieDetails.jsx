import { FaPlay } from "react-icons/fa";
import Button from "../components/button";
import Navbar from "./navbar";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movieApi";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    isPending,
    error,
    data: item,
  } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: async () => getMovieById(id),
  });
  return (
    <div>
      <Navbar />
      {item && (
        <div>
          <div
            className="relative w-full h-[685px] bg-black bg-center bg-cover"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
          >
            <div className="absolute flex flex-col gap-3 items-start justify-start text-justify bottom-[100px] left-[127px] max-w-[990px]">
              <div>
                <p className="font-light text-[22px]">
                  {item.release_date.split("-")[0]}
                </p>
                <span className="text-[48px] font-semibold">{item.title}</span>
              </div>
              <span className="text-[19px] font-semibold">
                {item.genres.map((genre) => genre.name).join(" • ") ||
                  "No genres found"}
              </span>
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
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div className="flex flex-col gap-8 max-w-[1600px] mx-auto p-10">
            <h2 className="text-[37px] font-semibold">Synopsis</h2>
            <p>{item.overview}</p>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
