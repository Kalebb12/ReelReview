import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData(["genre"]);
  return (
    <Link to={"/movieDetails/"+movie.id}>
      <div className="lg:w-[267px] w-[200px] min-w-[200px] lg:min-w-[267px] flex flex-col items-start gap-5 snap-start overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/` + movie.poster_path
              : "/images.jpg"
          }
          alt=""
          className="w-full rounded-bl-3xl rounded-tr-3xl h-[318px] object-cover"
        />
        <div className="w-full">
          {/* Ensure a full width container for the text */}
          <p className="text-[23px] truncate w-full">{movie.title}</p>
          <p className="font-bold text-[#A473FF]">
            {genres?.find((g) => g.id === movie.genre_ids[0])?.name ||
              "Unknown Genre"}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
