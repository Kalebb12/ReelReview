import Navbar from "./navbar";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCast, getMovieTrailer } from "../services/movieApi";

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

  const {
    isPending: loading,
    error: trailerError,
    data,
  } = useQuery({
    queryKey: ["trailer", id],
    queryFn: async () => getMovieTrailer(id),
  });

  const {
    isPending: castLoading,
    error: castError,
    data:castData,
  } = useQuery({
    queryKey: ["movie-cast", id],
    queryFn: async () => getMovieCast(id),
  });

  console.log(castData)

  return (
    <div className="flex flex-col">
      <Navbar />
      {item && (
        <div>
          <div
            className="relative w-full h-[685px] bg-black bg-center bg-cover"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.158)),
              url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
          >
            <div className="absolute flex flex-col gap-3 items-start justify-start text-justify bottom-[100px] xl:left-[127px] lg:left-[80px] px-5 max-w-[990px]">
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
              {/* <div className="flex items-center gap-6">
                <Button>
                  <FaPlay />
                  Play Now
                </Button>
                <Button type="outline">
                  <FaPlay />
                  Watch Triller
                </Button>
              </div> */}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div className="flex flex-col gap-3 p-10">
            <h2 className="text-[37px] font-semibold">Synopsis</h2>
            <p>{item.overview}</p>
          </div>
        </div>
      )}

      <div className="p-10">
        <span className="font-bold text-[32px]">Trailer</span>
        <div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 sm:grid-cols-2 place-items-center">
          {data &&
            data.slice(0, 3).map((trailer) => {
              return (
                <iframe
                  key={trailer.id}
                  width="100%"
                  height="350px"
                  className="bg-black"
                  src={`https://www.youtube.com/embed/${trailer.key}?${trailer.id}`}
                  title={trailer.name}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              );
            })}
        </div>
      </div>

      <div className="p-10">
        <span className="font-bold text-[32px]">Cast</span>
        <div className="grid grid-flow-col gap-2 overflow-x-scroll">
          {castData &&
            castData.slice(0,5).map((cast) => (
              <div key={cast.id} className="flex flex-col w-[150px] gap-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  className="w-full h-[150px] object-cover"
                />
                <div>
                  <p className="font-semibold text-[23px] truncate" title={cast.name}>{cast.name}</p>
                  <p className="text-[19px] font-light">{cast.character}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
