import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovie } from "../services/movieApi";
import MovieCard from "../components/movieCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { isPending, isError, data } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => searchMovie(query),
  });
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto gap-3">
      <div>
        <Link to="/">Home</Link> &gt; Search results for "{query}"
      </div>
      <div>
        {isPending && <p>loading...</p>}
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {data && data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <div>
          {data && data.length === 0 && (
            <div className="font-bold text-[32px]">No movie found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
