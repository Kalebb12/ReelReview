import { useQueryClient } from "@tanstack/react-query";

const MovieCard = ({ movie }) => {
  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData(["genre"]);
  return (
    <div className="w-[267px] min-w-[267px] flex flex-col items-start gap-5 snap-start overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
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
  );
};
export default MovieCard;
