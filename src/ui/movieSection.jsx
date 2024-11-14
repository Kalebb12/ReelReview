import MovieCard from "../components/movieCard";
import { useQuery } from "@tanstack/react-query";
import { getLastestMovies, getTopRatedMovies } from "../services/movieApi";

const MovieSection = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => getLastestMovies(),
  });

  const {
    data: ratedData,
    error: ratedError,
    isPending: ratedPending,
  } = useQuery({
    queryKey: ["topRated-movies"],
    queryFn: async () => getTopRatedMovies(),
  });
  return (
    <div>
      <div className="px-[40px] py-[51px] flex flex-col gap-8">
        <span className="font-semibold text-[37px]">Latest Releases</span>
        <div className="flex items-center gap-10 overflow-x-scroll snap-x">
          {data?.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </div>

      <div className="px-[40px] py-[51px] flex flex-col gap-8">
        <span className="font-semibold text-[37px]">Trending Movies</span>
        <div className="flex items-center gap-10 overflow-x-scroll snap-x">
          {ratedData?.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
